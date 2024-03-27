const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MenuItemSchema =
    new Schema({
        itemName: {type: String, required: true, maxLength: 100},
        description: {type: String, required: true, maxLength: 500},
        imageUrl: {type: String, required: false},
        options: {
            first: {
                type: {
                    name:  {type: String, required: true},
                    price: {type: Number, required: true}
                }, required: true},
            second: {
                type:{
                    name:  {type: String, required: true},
                    price: {type: Number, required: true},
                }, required: false},
        },
        category: {type: String, required: true, maxLength: 100},
    })

MenuItemSchema.virtual("url").get(() =>{
    return `/Menu/${this._id}`
})


module.exports = mongoose.model("menuItem", MenuItemSchema)