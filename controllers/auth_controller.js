const asyncHandler = require("express-async-handler")
const GoogleStrategy = require('passport-google-oidc');
require('dotenv').config()

const User = require("../models/user")


exports.loginUser = asyncHandler(async (req, res, next) => {
    res.render("login", {title: "Login"})
})

exports.logoutUser = asyncHandler(async (req, res, next) => {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/login');
        });
})

exports.success = asyncHandler(async (req, res, next) => {
    res.render("index", {title: "Success"})
})

exports.GoogleStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email'],
    state: true
}, verify)

function verify(issuer, profile, cb){
    /*console.log(`accessToken: {accessToken}, \nrefreshToken: {refreshToken.json}, \nissuer: ${issuer.json},
    \nprofile: ${profile.json}, \ncb: ${cb}`)*/
    User.findOne({ provider: issuer, subject: profile.id }, {}, {}).then((user) =>
    {

        if (!user) {
            User.create({
                provider: issuer,
                subject: profile.id,
                first_name: profile.name.givenName,
                last_name: profile.name.familyName,
                email: profile.emails[0].value
            }).then(r =>{
                return cb(null, r.toJSON());
            }).catch(e => {
                return cb(e, null);
            })

        }
        else {
            return cb(null, user);
        }
    }).catch(e => {
        return cb(e, null);
    })
}