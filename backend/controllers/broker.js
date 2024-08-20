const db = require('../config/db');

const getHomepageData = async (req, res) => {
  try {
    const { id, type } = req.user; // Extract user ID and type from the token

    console.log("User ID: ", id);

    // Condition based on user type
    const brokerCondition = { broker_id: id };

    const totalClients = await db('clients')
      .where(brokerCondition)
      .count('id as count')
      .first()
      .then(data => data.count);

    const totalPremiums = await db('quotes')
      .where(brokerCondition)
      .sum('premium as sum')
      .first()
      .then(data => data.sum || 0); // Ensure sum is 0 if no data

    const totalCommission = await db('clients')
      .where(brokerCondition)
      .sum('commission as sum')
      .first()
      .then(data => data.sum || 0); // Ensure sum is 0 if no data

    const totalQuotes = await db('quotes')
      .where(brokerCondition)
      .count('id as count')
      .first()
      .then(data => data.count);

    const topInsurers = await db('quotes')
      .select('insurer as name')
      .sum('premium as value')
      .where(brokerCondition)
      .groupBy('insurer')
      .orderBy('value', 'desc')
      .limit(5);

    const homepageData = {
      summary: {
        totalClients,
        totalPremiums,
        totalCommission,
        totalQuotes
      },
      topInsurers
    };

    res.json({ status: 'success', data: homepageData });
  } catch (error) {
    console.error('Failed to fetch homepage data:', error);
    res.status(500).json({ error: 'Failed to fetch homepage data' });
  }
};

const getAllClients = async (req, res) => {
  try {
    const { id, type } = req.user; // Extract user ID and type from the token

    const clients = await db('clients')
      .where({ broker_id: id })
      .select('*');

    res.json({ status: 'success', data: clients });
  } catch (error) {
    console.error('Failed to fetch clients:', error);
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};


const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const policyDetail = clientData.policy_detail;

    // Serialize the plan_modules field if it's not already a string
    if (Array.isArray(clientData.plan_modules)) {
      clientData.plan_modules = JSON.stringify(clientData.plan_modules);
    }

    // Insert client data
    const [newClientId] = await db('clients').insert({
      broker_id: clientData.broker_id,
      name: clientData.name,
      email: clientData.email,
      contact_number: clientData.contact_number,
      date_of_birth: clientData.date_of_birth,
      sex: clientData.gender,
      nationality: clientData.nationality,
      country: clientData.country,
      address: clientData.address,
      profile_picture: clientData.profile_picture,
      verification_id: clientData.verification_id,
      proof_of_address: clientData.proof_of_address,
      other_documents: clientData.other_documents,
      policy_information: policyDetail.policy_information,
      invoice: policyDetail.invoice,
      plan_modules: clientData.plan_modules,
      area_of_cover: policyDetail.area_of_cover,
      plan_name: policyDetail.plan_name,
      currency: policyDetail.currency,
      premium: policyDetail.premium,
      deductibles_or_copay: policyDetail.deductibles_or_copay,
      policy_number: policyDetail.policy_number,
      insurer: policyDetail.insurer,
      claim: clientData.claim,
      payment_frequency: policyDetail.payment_frequency,
      start_date: policyDetail.start_date,
      end_date: policyDetail.end_date,
      payment_method: policyDetail.payment_method,
      commission: policyDetail.commission,
      created_at: db.fn.now(), // assuming you want to set current timestamp
      updated_at: db.fn.now()  // assuming you want to set current timestamp
    });

    // Insert members data if provided
    if (clientData.members && clientData.members.length > 0) {
      const membersData = clientData.members.map(member => ({
        client_id: newClientId,
        name: member.name,
        nationality: member.nationality,
        date_of_birth: member.date_of_birth,
        relation: member.relation,
        created_at: db.fn.now(),
        updated_at: db.fn.now()
      }));

      await db('members').insert(membersData);
    }

    res.json({ message: 'Client created successfully', id: newClientId });
  } catch (error) {
    console.error('Failed to create client:', error);
    res.status(500).json({ error: 'Failed to create client' });
  }
};

const updateClient = async (req, res) => {
  const transaction = await db.transaction();

  try {
    const { id } = req.params;
    const clientData = req.body;
    const policyDetail = clientData.policy_detail;
    const members = clientData.members;

    // Serialize the plan_modules field if it's not already a string
    if (Array.isArray(clientData.plan_modules)) {
      clientData.plan_modules = JSON.stringify(clientData.plan_modules);
    }

    // Update client data
    await transaction('clients').where({ id }).update({
      broker_id: clientData.broker_id,
      name: clientData.name,
      email: clientData.email,
      contact_number: clientData.contact_number,
      date_of_birth: clientData.date_of_birth,
      sex: clientData.sex,
      nationality: clientData.nationality,
      country: clientData.country,
      address: clientData.address,
      profile_picture: clientData.profile_picture,
      verification_id: clientData.verification_id,
      proof_of_address: clientData.proof_of_address,
      other_documents: clientData.other_documents,
      policy_information: policyDetail.policy_information,
      invoice: policyDetail.invoice,
      plan_modules: clientData.plan_modules,
      area_of_cover: policyDetail.area_of_cover,
      plan_name: policyDetail.plan_name,
      currency: policyDetail.currency,
      premium: policyDetail.premium,
      deductibles_or_copay: policyDetail.deductibles_or_copay,
      policy_number: policyDetail.policy_number,
      insurer: policyDetail.insurer,
      claim: clientData.claim,
      payment_frequency: policyDetail.payment_frequency,
      start_date: policyDetail.start_date,
      end_date: policyDetail.end_date,
      payment_method: policyDetail.payment_method,
      commission: policyDetail.commission,
      updated_at: transaction.fn.now() // Update the timestamp
    });

    // Delete existing members
    await transaction('members').where({ client_id: id }).del();

    // Insert new members
    for (const member of members) {
      await transaction('members').insert({
        client_id: id,
        name: member.name,
        nationality: member.nationality,
        date_of_birth: member.date_of_birth,
        relation: member.relation,
        created_at: transaction.fn.now(), // Set the created_at timestamp
        updated_at: transaction.fn.now()  // Set the updated_at timestamp
      });
    }

    await transaction.commit();
    res.json({ message: 'Client updated successfully' });
  } catch (error) {
    await transaction.rollback();
    console.error('Failed to update client:', error);
    res.status(500).json({ error: 'Failed to update client' });
  }
};

const deleteClient = async (req, res) => {
  const transaction = await db.transaction();

  try {
    const { id } = req.params;

    // Delete members related to the client
    await transaction('members').where({ client_id: id }).del();
    await transaction('activities').where({ client_id: id }).del();
    // Delete the client
    await transaction('clients').where({ id }).del();

    

    await transaction.commit();
    res.json({ message: 'Client and related members deleted successfully' });
  } catch (error) {
    await transaction.rollback();
    console.error('Failed to delete client:', error);
    res.status(500).json({ error: 'Failed to delete client' });
  }
};


const deleteActivity = async (req, res) => {
  const transaction = await db.transaction();

  try {
    const { id } = req.params;
    await transaction('activities').where({ client_id: id }).del();
    await transaction.commit();
    res.json({ message: 'Client activity deleted successfully' });
  } catch (error) {
    await transaction.rollback();
    console.error('Failed to delete activity:', error);
    res.status(500).json({ error: 'Failed to delete activity' });
  }
};

const createActivity = async (req, res) => {
  try {
    const { client_id, date, category, details } = req.body;
    const { id: broker_id } = req.user; // Extract broker_id from the authenticated user

    // Check if the client belongs to the broker
    const client = await db('clients').where({ id: client_id, broker_id }).first();

    if (!client) {
      return res.status(404).json({ error: 'Client not found or does not belong to the broker' });
    }

    // Insert the new activity
    const [newActivityId] = await db('activities').insert({
      client_id,
      date,
      category,
      details,
      created_at: db.fn.now(),
      updated_at: db.fn.now()
    });

    res.json({ message: 'Activity created successfully', id: newActivityId });
  } catch (error) {
    console.error('Failed to create activity:', error);
    res.status(500).json({ error: 'Failed to create activity' });
  }
};


const getClientDetails = async (req, res) => {
  try {
    const { id } = req.params;

    // Get client details
    const client = await db('clients').where({ id }).first();

    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }

    // Get members related to the client
    const members = await db('members').where({ client_id: id });

    // Get client activities
    const activities = await db('activities').where({ client_id: id });

    res.json({
      status: 'success',
      data: {
        client,
        members,
        activities,
      },
    });
  } catch (error) {
    console.error('Failed to fetch client details:', error);
    res.status(500).json({ error: 'Failed to fetch client details' });
  }
};

// Quotes
const getAllQuotes = async (req, res) => {
  try {

    const { broker_id } = req.body;


    const quotes = await db('quotes').where({ broker_id: broker_id })


    res.json({ status: 'success', data: quotes });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
};


const createQuote = async (req, res) => {
  try {
    const {
      broker_id,
      name,
      email,
      contact_number,
      nationality,
      age,
      country,
      currency,
      premium,
      deductibles_or_copay,
      plan_modules,
      area_of_cover,
      plan_name,
      insurer,
      status,
      members
    } = req.body;

    // Start a transaction
    await db.transaction(async trx => {
      // Insert the quote data
      const [newQuoteId] = await trx('quotes').insert({
        broker_id,
        name,
        email,
        contact_number,
        nationality,
        age,
        country,
        currency,
        premium,
        deductibles_or_copay,
        plan_modules: JSON.stringify(plan_modules), // Store the array as a JSON string
        area_of_cover,
        plan_name,
        insurer,
        status,
        members: JSON.stringify(members)
      });


      // Commit the transaction
      await trx.commit();

      res.json({ message: 'Quote created successfully', id: newQuoteId });
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create quote' });
    console.log(error);
  }
};



const updateQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const quoteData = req.body;
    await db('quotes').where({ id }).update(quoteData);
    res.json({ message: 'Quote updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update quote' });
  }
};

const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    await db('quotes').where({ id }).del();
    res.json({ message: 'Quote deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete quote' });
  }
};

const getQuoteDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await db('quotes').where({ id }).first();
    
    res.json({
      status: 'success',
      data: quote ? quote : [], // Return an empty array if quote is not found
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote details' });
  }
};

// Support Tickets
const getAllSupportTickets = async (req, res) => {
  try {

    const { broker_id } = req.body;

    const supportTickets = await db('support_tickets').where({ broker_id: broker_id })

    res.json({ status: 'success', data: supportTickets });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch support tickets' });
  }
};

const createSupportTicket = async (req, res) => {
  try {
    const supportTicketData = req.body;
    const [newSupportTicketId] = await db('support_tickets').insert(supportTicketData).returning('id');
    res.json({ message: 'Support ticket created successfully', id: newSupportTicketId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create support ticket' });
  }
};

const updateSupportTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const supportTicketData = req.body;
    await db('support_tickets').where({ id }).update(supportTicketData);
    res.json({ message: 'Support ticket updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update support ticket' });
  }
};

const deleteSupportTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await db('support_tickets').where({ id }).del();
    res.json({ message: 'Support ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete support ticket' });
  }
};

module.exports = {
  getHomepageData,
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
  getClientDetails,
  createActivity,
  deleteActivity,
  getAllQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
  getQuoteDetails,
  getAllSupportTickets,
  createSupportTicket,
  updateSupportTicket,
  deleteSupportTicket,
};
