'use strict';

var mongoose = require('mongoose'),
  Places = mongoose.model('Places');

exports.list_all_places = function(req, res) {
  var response = {};
  Places.find({}, function(err, place) {
    if(err) {
                response = {"status" : "Fail!","data" : null};
            } else {
                response = {"status" : "Success!","data" : place};
            }
    res.json(response);
  });
};

exports.create_a_place = function(req, res) {
  var new_newplace = new Places(req.body);
  new_newplace.name = req.body.name;
  new_newplace.url = req.body.url;
  new_newplace.guess = req.body.guess;
  new_newplace.help = req.body.help;
  var response = {};
  new_newplace.save(function(err, place) {
    if(err) {
                response = {"status" : "Fail!","message" : "Error adding the data!"};
            } else {
                response = {"status" : "Success!","message" : "Add the new data!"};
            }
    res.json(response);
  });
};


exports.read_a_place = function(req, res) {
  var response = {};
  Places.findById(req.params.placeID, function(err, place) {
    if(err) {
                response = {"status" : "Fail!","data" : null};
            } else {
                response = {"status" : "Success!","data" : place};
            }
    res.json(response);
  });
};


exports.update_a_place = function(req, res) {
  var response = {};
  Places.findByIdAndUpdate(req.params.placeID, req.body, {new: true}, function(err, place) {
    if(err) {
                response = {"status" : "Fail!","message" : "Error updating the data!"};
            } else {
                response = {"status" : "Success!","message" : "Updated the place!"};
            }
    res.json(response);
  });
};


exports.delete_a_place = function(req, res) {
  var response = {};
  Places.remove({
    _id: req.params.placeID
  }, function(err, place) {
    if(err) {
                response = {"status" : "Fail!","message" : "Error deleting the data!"};
            } else {
                response = {"status" : "Success!","message" : "Deleted the place!"};
            }
    res.json(response);
  });
};
