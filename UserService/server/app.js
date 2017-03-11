let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let bcrypt = require('bcrypt-nodejs');
let config = require('./config');
let routes = require('./routes');
let studentRoutes = require('./routes/students');
let accessKeyRoutes = require('./routes/coordinatorAccessKeys');
let coordinatorRoutes = require('./routes/taCoordinators');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use('/students', studentRoutes);
app.use('/coordinator-access-keys', accessKeyRoutes);
app.use('/ta-coordinators', coordinatorRoutes);

// MongoDB Setup
let mongoose = require('mongoose');
mongoose.connect(config.MONGO_URI);

// Used for Authentication
let jwt = require('jsonwebtoken');
app.set('secret', config.secret);

app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


module.exports = app;