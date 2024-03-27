const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema =
    new Schema(
        {
            items: [{type: mongoose.Schema.Types.ObjectId, ref: 'menuItem', required: true}],
            total: {type: Number, required: true},
            user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
            date: {type: Date, required: true},
            status: {type: String, required: true},
            coupon: {
                used: {type: Boolean, required: true},
                code: {type: String, required: false}
            },
            deliveryAddress: {
                coords: {type: [Number], index: '2d'},
                address: {type: String, required: true}
            },
        }
    )

OrderSchema.virtual("url").get(() =>{
    return `/order/${this._id}`
})

module.exports = mongoose.model("order", OrderSchema)

