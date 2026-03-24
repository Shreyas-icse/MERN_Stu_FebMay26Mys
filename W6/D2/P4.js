//using the EventEmitter class
const EventEmitter = require("events");//npm install lodash for lodash thirdparty 

//create a new event emitter instance
//(new) this object can publish events and allow listeners to subscribe
const orderEmitter = new EventEmitter();

//Register a listener for the "orderPlace" event.
//whenever the event is emitted,the function will execute.
//once() registers a listener that automatically removes itself after running for the first time
orderEmitter.once("orderPlaced",function(orderId,customerName,orderValue){
    // console.log("hello ",customerName);
     console.log("bill ",orderValue);
    
    console.log("Waiting for Restaurant to accepted order.",orderId);
    
});
orderEmitter.on("orderPlaced",function(orderId,customerName){
    console.log("hello ",customerName);
    console.log("Restaurant accepted order.",orderId);
    
});
orderEmitter.on("orderPlaced",function(orderId){
    // console.log("hello ",customerName);
    console.log("Assigning delivery partner.",orderId);
    
});
orderEmitter.on("orderPlaced",function(orderId,customerName){
    console.log("hello ",customerName);
    console.log("Ramesh is delivering your order",orderId);
    
});

//Emit the event with extra data
//the listener recives the orderId value.
orderEmitter.emit("orderPlaced","ORD-2450330","shreyas",1000);
orderEmitter.emit("orderPlaced","ORD-2450330","shreyas",1000);