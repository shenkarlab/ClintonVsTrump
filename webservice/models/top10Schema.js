var mongoose = require('mongoose');
var schema = mongoose.Schema;


var top10Schema = new schema({
  topic: {type:Number, required:true},
  date: {type:String},
  count: {type:Number},
},{collection: 'top10'});


var Top10 = mongoose.model('Top10', top10Schema);
module.exports = Top10;