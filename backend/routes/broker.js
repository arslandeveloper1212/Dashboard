const express = require('express');
const router = express.Router();
const brokerController = require('../controllers/broker');
const auth = require('../middlewares/auth');


router.get('/homepage-data',auth, brokerController.getHomepageData);
router.get('/clients',auth, brokerController.getAllClients);
router.post('/clients',auth, brokerController.createClient);
router.put('/clients/:id',auth, brokerController.updateClient);
router.delete('/clients/:id',auth, brokerController.deleteClient);
router.get('/client-detail/:id',auth, brokerController.getClientDetails);

router.post('/create-activity',auth, brokerController.createActivity);
router.delete('/delete-activity/:id',auth, brokerController.deleteActivity);


router.post('/get-all-quotes',auth, brokerController.getAllQuotes);
router.post('/quotes',auth, brokerController.createQuote);
router.put('/quotes/:id',auth, brokerController.updateQuote);
router.delete('/quotes/:id',auth, brokerController.deleteQuote);
router.get('/quotes-detail/:id',auth, brokerController.getQuoteDetails);

router.post('/support-tickets',auth, brokerController.getAllSupportTickets);
router.post('/support-tickets',auth, brokerController.createSupportTicket);
router.put('/support-tickets/:id',auth, brokerController.updateSupportTicket);
router.delete('/support-tickets/:id',auth, brokerController.deleteSupportTicket);

module.exports = router;
