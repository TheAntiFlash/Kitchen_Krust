const express = require('express');
const router = express.Router();
const ensureLogIn = require('connect-ensure-login').ensureLoggedIn;
const menu_item_controller = require("../controllers/menu_item_controller")


router.get('/' , ensureLogIn('/login'), menu_item_controller.menu_item_list);
router.get('/:id', menu_item_controller.menu_item_detail);

module.exports = router;
