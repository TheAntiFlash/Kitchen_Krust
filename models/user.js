const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema =
    new Schema({
        email: {type: String, required: true, maxLength: 100},
        first_name: {type: String, required: true, maxLength: 100},
        last_name: {type: String, required: false, maxLength: 100},
        provider: {type: String, required: true, maxLength: 256},
        subject: {type: String, required: true, maxLength: 256},
        is_admin: {type: Boolean, required: true, default: true}, // change to false later
        is_active: {type: Boolean, required: true, default: true},
        date_joined: {type: Date, required: true, default: Date.now},
    })

UserSchema.virtual("url").get(() =>{
    return `/User/${this._id}`
})

module.exports = mongoose.model("user", UserSchema)
