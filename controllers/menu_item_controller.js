const MenuItem = require("../models/menu_item")
const asyncHandler = require("express-async-handler")

exports.menu_item_list = asyncHandler( async (req, res, next) => {
    const allMenuItems = await MenuItem.find({}, "itemName imageUrl price")
        .sort({price: 1})
        .populate("itemName")
        .exec();
    // const allMenuItems = await MenuItem.find()
    //
    res.render("menu_items", {title: "Menu Items", menu_items: allMenuItems})
    // res.json(allMenuItems)
    //res.send("NOT IMPLEMENTED: menu item list");
})

exports.menu_item_detail = asyncHandler(async (req,res,next) => {
    res.send("NOT IMPLEMENTED: menu item detail");

})

//const item = new MenuItem({itemName: "Tokyo", description: "Chicken Zinger", imageUrl: "https://placehold.co/200x200", price: 510})
// const itemSaved = await item.save()
// res.status(201).json(itemSaved)