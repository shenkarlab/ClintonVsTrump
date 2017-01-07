var mongoose = require('mongoose');
var schema = mongoose.Schema;


var topicSchema = new schema({
  topic: {type:Number, required:true},
  description: {type:String}
},{collection: 'topics'});


var allTopic = mongoose.model('allTopic', topicSchema);
module.exports = allTopic;