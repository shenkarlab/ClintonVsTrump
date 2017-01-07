var mongoose = require('mongoose');
var schema = mongoose.Schema;


var eventSchema = new schema({
  topic: {type:Number, required:true},
  date : {type:String,required:true},
  description: {type:String}
},{collection: 'events'});


var event = mongoose.model('event', eventSchema);
module.exports = event;