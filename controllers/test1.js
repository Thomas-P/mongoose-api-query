var fs = require('fs');
var Monster = require('../models/monster');
var mongooseApiQuery = require('../lib/mongoose-api-query');

exports.index = function(req, res){

  mongooseApiQuery(req, {
    custom_params: function(key, val, searchParams) {
      return false;
    },
    model: Monster,
    per_page: 100
  }, function(query, attributes){
    query.exec(function (err, results) {
      res.send(results);
    });
  });

};