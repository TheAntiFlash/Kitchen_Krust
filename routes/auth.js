const express = require("express")
const {authenticate} = require("passport");
const GoogleStrategy = require('passport-google-oidc');

const router = express.Router()

router.get("/login", (req, res) => {
    res.render("login", {title: "Login"})
})

router.get('/login/federated/google', authenticate('google'));


module.exports = router