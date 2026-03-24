//handling the error event in EventEmitter
const EventEmitter = require("events");

const fileEmitter = new EventEmitter();

//register an error listener

fileEmitter.on("error",function(errorMessage){
    console.log("Emitter handler error",errorMessage);
    
});

//normal event listener:happy scenario
fileEmitter.on("fileProcessed",function(fileName){
    console.log("file processed succesfully",fileName);
    
});

fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","File processing failed.");