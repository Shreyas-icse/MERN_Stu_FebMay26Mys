//Removing EventEmitter listener

const EventEmitter = require("events");

const jobEmitter = new EventEmitter();

function showJobProgress(status){
    console.log("Job Status: ",status);
    
}
//Add listener
jobEmitter.on("progress",showJobProgress);

//emit the event
jobEmitter.emit("progress","50% completed");

//remove listener
jobEmitter.off("progress",showJobProgress);

//emit the event
jobEmitter.emit("progress","100% completed");