//Basics of Objects
const person = {
    name:"Shreyas",
    age:22,
    isStudent: false
};
console.log("Person",person);
console.log("name",person.name);
console.log("age",person['age']);

//Add new property
person.city= "Mysore";
console.log("Person",person);

//Modify
person.age = 23;
//delete
delete person.isStudent;
console.log("Person",person);

//Object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;
console.log(car);




