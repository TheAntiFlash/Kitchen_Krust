const express = require("express")
const passport = require("passport");
const {loginUser, success, GoogleStrategy, logoutUser} = require("../controllers/auth_controller");
const {JSONCookie} = require("cookie-parser");

const router = express.Router()

passport.use(GoogleStrategy)

router.get("/", success)

router.get("/login", loginUser)


router.get('/login/federated/google', passport.authenticate('google'));
router.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect: '/menu',
    failureRedirect: '/login'
}));

router.post('/logout', logoutUser);

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user._id, name: user.first_name, email: user.email });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

module.exports = router