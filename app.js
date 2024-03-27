const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const csrf = require('csurf');
var passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const MongoDbStore = require('connect-mongodb-session')(session);
const menuRouter = require('./routes/menu_item');
const authRouter = require('./routes/auth');
const orderRouter = require('./routes/order')
const order = require("./models/order");
require('dotenv').config()

const app = express();

// Mongoose + MongoStore
mongoose.set("strictQuery", false);
const mongoDB = process.env.DB_CON
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
const store = new MongoDbStore({
    uri: mongoDB,
    collection: 'sessions'
}, function(error) {
    if(error)
    {console.log(error)}
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
// Use the cors middleware to enable Cross-Origin Resource Sharing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use the session middleware to store session data
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store
}));
app.use(passport.authenticate('session'));

//app.use('/', indexRouter);
app.use('/menu', menuRouter);
app.use('/', authRouter);
app.use('/orders', orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
