var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var prodsRouter = require('./routes/prods');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', prodsRouter);

// catch 404 (because is the last possible route) and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "route does not exist"));
});

// error handler
app.use(function(err, req, res, next) {
  if (err.status){
    res.status(err.status).send(err.message);
  }
  else{
    res.status(500).send("Something went wrong");
  }
});

module.exports = app;
