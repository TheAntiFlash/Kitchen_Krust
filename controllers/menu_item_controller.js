const MenuItem = require("../models/menu_item")
const asyncHandler = require("express-async-handler")
const Items = require('../models/dummy-burgers-data')



exports.menu_item_list = asyncHandler( async (req, res, next) => {
    const allMenuItems = await MenuItem.find({}, "itemName imageUrl options description category")
        .sort({itemName: 1})
        .exec();

    console.log(`auth?: ${req.isAuthenticated()}`)
    res.render("menu_items", {title: "Menu Items", menu_items: allMenuItems})

})

exports.menu_item_detail = asyncHandler(async (req,res,next) => {
    const menuItem = await MenuItem.findById(req.params.id)
    res.json(menuItem)


})

//const item = new MenuItem({itemName: "Tokyo", description: "Chicken Zinger", imageUrl: "https://placehold.co/200x200", price: 510})
// const itemSaved = await item.save()
// res.status(201).json(itemSaved)
// await Promise.all(Items.map(async (item) => {
//     const itemSaved = await item.save()
//     console.log(itemSaved)
// }))
