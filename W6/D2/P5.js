//Microtasks & Macrotasks
console.log("1. Synchronous start.");

//Promise.resolve(...).then(...)schedule a microtask
Promise.resolve().then(function(){
    console.log("3. Promise microtask executed."); 
});
//Set timeout(...0)schedules task for a later time.
//even with 0 delay ,it doesn't interrupt current sync code
setTimeout(()=>{
    console.log("4. Timer callback executed.");
},0);

console.log("2. Synchronous end");
