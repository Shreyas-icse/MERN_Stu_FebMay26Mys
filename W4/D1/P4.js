//logging (debugging approach print every thing on the console)
console.log("console logging");
console.warn("Warning message");
console.error("error message");

let users =[
    {id:1,name:"Shreyas"},
    {id:2,name:"Pavan"}
];
console.log(users);
console.table(users);

//group related logs

console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();


//measure the execuation time
console.time("LoopTimer");
for(let i=0; i<1000; i++){}
console.timeEnd("LoopTimer");



