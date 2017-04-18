var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Place = require('./api/models/models'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.

var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);