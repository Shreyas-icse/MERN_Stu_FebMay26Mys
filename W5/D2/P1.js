//Introduction to callback function
function greetUser(name,callback){
    console.log("Hello ,"+name);
    //callback function is executed only after the execution of current function
    callback();
    
}
function showCompletionMessage(){
    console.log("The greeting task is complete");
    
}

greetUser("shreyas",showCompletionMessage);