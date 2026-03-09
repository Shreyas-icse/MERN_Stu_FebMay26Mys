//try catch basics
//reference error
// const error = document.getElementById("error");

// try{
//     console.log("Trying to access undefined variable");
//     console.log((notdefined));
     
// }
// catch(err){
//     console.log("error caught",err.name,"-",err.message);
//     document.writeln("Trying to access undefined variable"); 
//     error.textContent = "2 Trying to access undefined variable " 
    
// }
// console.log("Program execuation continues");

//      JSON parsing error
let jsonText = "{json}";
try{
    let data = JSON.parse(jsonText);
    console.log(data);
    
}
catch(err){
    console.log("JASON parse error",err.message);
    
};

try{
    let num =10;
    num();
    
}
catch(err){
    console.log("Caught error",err.name);
    
};

