const express = require('express');
const router = express.Router();
const accountController = require('../app/controllers/AccountController');

router.get('/', accountController.listAccounts);
router.get('/edit/:id', accountController.editAccount);
router.post('/update/:id', accountController.updateAccount);
router.post('/delete/:id', accountController.deleteAccount);

module.exports = router;
