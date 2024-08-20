const bcrypt = require('bcryptjs');

const db = require('../config/db');

const getHomepageData = async (req, res) => {
  try {
    // Fetch summary data
    const totalBrokers = await db('users')
      .where('type', 'Broker')
      .count('id as totalBrokers');

    const totalPremiums = await db('quotes')
      .sum('premium as totalPremiums');

    const totalQuotes = await db('quotes')
      .count('id as totalQuotes');

    const openTickets = await db('support_tickets')
      .where('status', 'Open')
      .count('id as openTickets');

    // Fetch top insurers
    const topInsurers = await db('quotes')
      .select('insurer as name')
      .sum('premium as value')
      .groupBy('insurer')
      .orderBy('value', 'desc')
      .limit(5);

    res.json({
      status: 'success',
      data: {
        summary: {
          totalBrokers: totalBrokers[0].totalBrokers,
          totalPremiums: totalPremiums[0].totalPremiums,
          totalQuotes: totalQuotes[0].totalQuotes,
          openTickets: openTickets[0].openTickets,
        },
        topInsurers
      }
    });
  } catch (error) {
    console.error('Failed to get homepage data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Controller for getting all invoices
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await db('invoices').select('*');
    res.json({ status: 'success', data: invoices });
  } catch (error) {
    console.error('Failed to get invoices:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating an invoice
const createInvoice = async (req, res) => {
  try {
    const { broker_id, due_date, details, amount, currency, status } = req.body;
    const [id] = await db('invoices').insert({ broker_id, due_date, details, amount, currency, status });
    res.json({ status: 'success', data: { id } });
  } catch (error) {
    console.error('Failed to create invoice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for updating an invoice
const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { broker_id, due_date, details, amount, currency, status } = req.body;
    await db('invoices').where({ id }).update({ broker_id, due_date, details, amount, currency, status });
    res.json({ status: 'success', message: 'Invoice updated successfully' });
  } catch (error) {
    console.error('Failed to update invoice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for deleting an invoice
const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    await db('invoices').where({ id }).del();
    res.json({ status: 'success', message: 'Invoice deleted successfully' });
  } catch (error) {
    console.error('Failed to delete invoice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting all users
const getAllUsers = async (req, res) => {
  try {
    const users = await db('users').select('*');
    res.json({ status: 'success', data: users });
  } catch (error) {
    console.error('Failed to get users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, contact_number, type, status, profile_picture } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const [id] = await db('users').insert({
      name,
      email,
      password: hashedPassword, // Store the hashed password
      contact_number,
      type,
      status,
      profile_picture
    });

    res.json({ status: 'success', data: { id } });
  } catch (error) {
    console.error('Failed to create user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for updating a user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, contact_number, type, status, profile_picture } = req.body;

    // Prepare the update object
    const updateData = { name, email, contact_number, type, status, profile_picture };

    // If a new password is provided, hash it before updating
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    await db('users').where({ id }).update(updateData);

    res.json({ status: 'success', message: 'User updated successfully' });
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Controller for deleting a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db('users').where({ id }).del();
    res.json({ status: 'success', message: 'User deleted successfully' });
  } catch (error) {
    console.error('Failed to delete user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getAllSupportTickets = async (req, res) => {
  try {
    const supportTickets = await db.select('*').from('support_tickets');
    res.json(supportTickets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch support tickets' });
  }
};

const updateSupportTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { broker_id, issue_category, status, initiated_date, response_date, message, response } = req.body;
    await db('support_tickets').where({ id }).update({ broker_id, issue_category, status, initiated_date, response_date, message, response });
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
  getAllInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getAllSupportTickets,
  updateSupportTicket,
  deleteSupportTicket
};
