//Conditional statements
let age = 20;
if(age<13){
    console.log("child");
}
else if(age<18){
    console.log("Teenager");
}
else{
    console.log("Adult");
}


//Switch statments
console.log("Conditional statments");
const day = 'c';
 switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log("Mid of the week");
        break;
    case 'c':
        console.log("End of the week");
        break;
    default:
        console.log("Some day in the week");
        break;
        
 }

 //Type conversion
 let n = Number("abc");
 console.log("n : " ,n);
 console.log("Type of n:",typeof n , "isNaN",isNaN(n));