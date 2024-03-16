const express = require('express');
const router = express.Router();
const menu_item_controller = require("../controllers/menu_item_controller")


router.get('/', menu_item_controller.menu_item_list);
router.get('/:id', menu_item_controller.menu_item_detail);

module.exports = router;
