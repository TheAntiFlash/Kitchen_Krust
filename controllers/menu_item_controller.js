const MenuItem = require("../models/menu_item")
const asyncHandler = require("express-async-handler")

exports.menu_item_list = asyncHandler( async (req, res, next) => {
    res.send("NOT IMPLEMENTED: menu item list");
})

exports.menu_item_detail = asyncHandler(async (req,res,next) => {
    res.send("NOT IMPLEMENTED: menu item detail");

})