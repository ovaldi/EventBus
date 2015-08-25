# EventBus

### Installation

for Node

    npm install ovaldi-event-bus

for Bower

    bower install event-bus

for Require.js

    require.config({
        paths: {
            "eventbus": "path/to/eventbus.js"
        }
    });

    require(["eventbus"], function (EventBus) {
      //do something
    });

### Usage

    require(["eventbus"], function(EventBus){
      var bus = new EventBus();

      bus.on("ready", function(data1, data2){
        console.log(data1, data2);
      });

      bus.emit("ready", "lol", "WOW");

      bus.off("ready");
    });

### License
    MIT