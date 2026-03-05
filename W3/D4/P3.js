//Array Map
let numArray = [1,2,3,4];
let squared = numArray.map(num=>num*num);
console.log(squared);

let prices = [100,200,300,400];
let priceWithGST = prices.map(price=>price+price*0.18);
console.log("price w/o tax:",prices);
console.log("price with tax:",priceWithGST);

//using the map to extract files
let users = [
    {name:"Nivas",age:24},
    {name:"Krish",age:28}
];

let names = users.map(user=>user.name);
console.log("",names);



