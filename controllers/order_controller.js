const Order = require('../models/order');
const asyncHandler = require('express-async-handler');
exports.allOrders = asyncHandler(async (req, res, next) => {
    const allOrders = await Order.find()
        .sort({orderDate: 1})
        .populate("user")
        .populate("items")
    res.json(allOrders)
})


exports.createDummyData = asyncHandler(async (req, res, next) => {

    const User = require('../models/user'); // Assuming the User model is in this path
    const MenuItem = require('../models/menu_item');
    const Order = require('../models/order');
    // Fetch a user
    const user = await User.findOne();

    // Fetch all menu items
    const menuItems = await MenuItem.find();

    // Calculate total price
    const total = menuItems.reduce((sum, item) => sum + item.price, 0);

    // Create 3 order documents
    for (let i = 0; i < 3; i++) {
        orders = await Order.create({
            items: menuItems.map(item => item._id),
            total: total,
            user: user._id,
            date: new Date(),
            status: 'pending',
            coupon: {
                used: false,
                code: null
            },
            deliveryAddress: {
                coords: [0, 0], // Dummy coordinates
                address: '123, Dummy Street' // Dummy address
            }
        });
        console.log(orders)
    }

})