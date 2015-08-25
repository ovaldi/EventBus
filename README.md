# EventBus

### How to use EventBus on browser?
    bower install event-bus

    require(["event-bus"], function(EventBus){
      var bus = new EventBus();
      bus.on("ready", function(data1, data2){
        console.log(data1, data2);
      });

      bus.emit("ready", "lol", "WOW");
    }); 
