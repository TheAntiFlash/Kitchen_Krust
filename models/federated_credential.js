const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Federated_CredentialSchema =
    new Schema({
        user_id: {type: Schema.Types.ObjectId, required: true},
        provider: {type: String, required: true, maxLength: 256},
        subject: {type: String, required: true, maxLength: 256},
    })

module.exports = mongoose.model("federated_credential", Federated_CredentialSchema)