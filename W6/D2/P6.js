//process.nextTick, Promise microtask & Timer
console.log("1.start of script.");


//process.nextTick schedules a callback to run soon after current synchronous code complete.
process.nextTick(function(){
    console.log("3. process.nextTick callback executed");
    
});

//promise microtask runs after nexttick in nodeJS
Promise.resolve().then(function(){
    console.log("4. Promise microtask executed.");
    
});

//callback timer runs later
setTimeout(() => {
    console.log("5. Timer callback executed.");
    
}, 0);
console.log("2. End of script");
