const express = require('express');
const router = express.Router();
const order_controller = require('../controllers/order_controller');
const ensureLogIn = require('connect-ensure-login').ensureLoggedIn;

router.get('/', order_controller.allOrders);

module.exports = router;