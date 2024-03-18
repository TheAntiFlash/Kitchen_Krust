const User = require("../models/user");

exports.userByProvider =  (issuer, id, cb) => {
    const user =
        User.findOne({ provider: issuer, subject: id })
}

