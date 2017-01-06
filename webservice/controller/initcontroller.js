var mongoose = require('mongoose'),
Top10 = require('../models/top10Schema'),
event = require('../models/eventSchema');
var fs = require("fs");




exports.saveData = function(req, res){
     

     var content = fs.readFileSync("localDocs/topic1.json");
     var jsonContent = JSON.parse(content);

        
        var myTopic;
        var arrayStory;
        var date;
        var count;

        for(var t=0; t<jsonContent.length; t++){
            var keys = Object.keys(jsonContent[t]);

            for (var i = 0; i < keys.length; i++) {
              //console.log(jsonContent[t][keys[i]]);
              if(keys[i] == "topic")
              {
                myTopic = jsonContent[t][keys[i]];
                //console.log("my topic is "+ myTopic);
              }
              if(keys[i] == "story")
              {
                //for(var temp=1; temp<366; temp++)
                //console.log(Object.keys(jsonContent[t]["story"]));

                var array_date = Object.keys(jsonContent[t]["story"]);
                for(var temp=0; temp<array_date.length; temp++){

                    var date = array_date[temp];
                    var count = (jsonContent[t]["story"][date]);

                    console.log(myTopic+ " " +date + " "+ count);
                    var saveDoc = new Top10({
                    topic: myTopic,
                    date: date,
                    count: count,
                    });

                    saveDoc.save(function(err, res){
                        if(err){
                            console.log("error"+err);
                        }
                        else
                            console.log("save!");
                    });  
                }
                //console.log(jsonContent["story"]);
                
              }
            }
        }

    var contentEvent = fs.readFileSync("localDocs/event.json");
    var jsonEvent = JSON.parse(contentEvent);

    for(var t=0; t<jsonEvent.length; t++){
             var saveEvent = new event({
                    topic: jsonEvent[t].topic,
                    date: jsonEvent[t].date,
                    description: jsonEvent[t].description,
                    });

                    saveEvent.save(function(err, res){
                        if(err){
                            console.log("error"+err);
                        }
                        else
                            console.log("save!");
                    });
    }


}
