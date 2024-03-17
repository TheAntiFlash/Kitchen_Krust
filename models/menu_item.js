const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MenuItemSchema =
    new Schema({
        //id: {type: String, required: true, },
        itemName: {type: String, required: true, maxLength: 100},
        description: {type: String, required: true, maxLength: 500},
        imageUrl: {type: String, required: true},
        price: {type: Number, required: true},
})

MenuItemSchema.virtual("url").get(() =>{
    return `/Menu/${this._id}`
})


module.exports = mongoose.model("menuItem", MenuItemSchema)