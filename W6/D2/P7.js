//setimmediate vs setTimeout
console.log("Scheduling setTimeout and setImmediate");

//callback timer
setTimeout(()=>{
    console.log("Timer callback from setTimeout");
    
},0);

// setimmediate callback
setImmediate(function(){
    console.log("setImmediate callback executed.");
    
});

console.log("Both callbacks are now waiting for the event loop");
