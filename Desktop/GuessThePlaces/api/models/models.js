'use strict';
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/binhdb');
/*
   * MongoDB port is 27017 by default.
   * Assuming you have created mongoDB database named "demoDb".
*/
var mongoSchema =   mongoose.Schema;
var PlacesSchema = ({
  "name":String,
  "url":String,
  "guess":String,
  "help":String
});

module.exports = mongoose.model('Places', PlacesSchema);