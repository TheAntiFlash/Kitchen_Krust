const express = require("express")
const passport = require("passport");
const {loginUser, success, GoogleStrategy} = require("../controllers/auth_controller");

const router = express.Router()

passport.use(GoogleStrategy)

router.get("/", success)

router.get("/login", loginUser)


router.get('/login/federated/google', passport.authenticate('google'));
router.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username, name: user.name });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

module.exports = router