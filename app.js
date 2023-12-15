var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var categoryRouter = require('./routes/category');
var productRouter = require('./routes/product');

//1. config router
// var mobileRouter = require('./routes/mobile');
// var brandRouter = require('./routes/brand');

var app = express();
//2. config 'mongoose' module
var mongoose = require('mongoose');
var uri =
  'mongodb+srv://huyhvq2003:alobloclo1234@cloud.eorbsob.mongodb.net/pilloMart';
mongoose
  .connect(uri)
  .then(() => console.log('ok'))
  .catch((err) => console.log('err'));

//3. config 'body-parser' module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var hbs = require('hbs');
hbs.registerHelper('equal', require('handlebars-helper-equal'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//4. config port
app.listen(process.env.PORT || 3001);

module.exports = app;
