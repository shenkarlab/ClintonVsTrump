var mongoose = require('mongoose'),
Top10 = require('../models/top10Schema'),
event = require('../models/eventSchema');



exports.getData = function(req, res){
    var t1, t2;

    Top10.find({},function(err, docs){
        if (err){
              throw err;
        }
  
     t1 = docs; 

    event.find({},function(err, docs){
        if (err){
              throw err;
        }
   
     t2 = docs; 

    var res1 = {
        Bubbles:t1,
        sideEvent:t2
    };

    res.json(res1s);

         });
    });
}

