//Basic callback variations
//1. a callback with no input data
//2. a callback that receives data from main function
// callback is not a keyword

function runTask(callback){
    console.log("Task is running.");
    callback();
    
}
function runTaskWithResult(taskName,callback){
    console.log("processing task: ",taskName);
    callback("Task"+taskName+"finished successfully.");

    
}
function showSimpleDoneMessage(){
    console.log("Simple calback executed.");
    
}

function showDetailedMessage(message){
    console.log(message);
    
}

runTask(showSimpleDoneMessage);
runTaskWithResult("send monthly report",showDetailedMessage);