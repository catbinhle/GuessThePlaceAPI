'use strict';
module.exports = function(app) {
  var todoPlace = require('../controllers/controllers');

  // todoPlace Routes
  app.route('/places')
    .get(todoPlace.list_all_places)
    .post(todoPlace.create_a_place);


  app.route('/places/:placeID')
    .get(todoPlace.read_a_place)
    .put(todoPlace.update_a_place)
    .delete(todoPlace.delete_a_place);
};