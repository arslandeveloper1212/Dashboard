const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const auth = require('../middlewares/auth');


router.get('/homepage-data',auth, adminController.getHomepageData);
router.get('/invoices',auth, adminController.getAllInvoices);
router.post('/invoices',auth, adminController.createInvoice);
router.put('/invoices/:id',auth, adminController.updateInvoice);
router.delete('/invoices/:id',auth, adminController.deleteInvoice);

router.get('/users',auth, adminController.getAllUsers);
router.post('/users',auth, adminController.createUser);
router.put('/users/:id',auth, adminController.updateUser);
router.delete('/users/:id',auth, adminController.deleteUser);

router.get('/support-tickets',auth, adminController.getAllSupportTickets);
router.put('/support-tickets/:id',auth, adminController.updateSupportTicket);
router.delete('/support-tickets/:id',auth, adminController.deleteSupportTicket);

module.exports = router;
