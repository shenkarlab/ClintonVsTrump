var mongoose = require('mongoose'),
allTopic = require('../models/topicSchema');





exports.getData = function(req, res){
    allTopic.find({},function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
    });
}

