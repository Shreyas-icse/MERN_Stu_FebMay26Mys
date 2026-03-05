//Array basics
console.log("Array basics");
//creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name: "Gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log( mixedArray);

//using constructor
let fruits = new Array("apple","mango");
console.log(fruits);
console.log("is fruits an array?",Array.isArray(fruits));

//Push:add
fruits.push("cherry");
console.log(fruits);

//pop:remove
fruits.pop();
console.log(fruits);

//unshift:adds elements to the beginning
fruits.unshift("orange");
console.log(fruits);


//shift: used to remove from begining
fruits.shift();
console.log(fruits);





