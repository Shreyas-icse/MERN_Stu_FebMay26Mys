//filter method
let marks = [75,49,56,70,82,51,68]
let passed = marks.filter(mark =>mark>=70);

console.log(marks);
console.log(passed);
 
let students = [
    {name:"shreyas",marks:50},
    {name:"pavan",marks:85},
    {name:"rakesh",marks:95},
    {name:"vinay",marks:75}
];
// let pass = students.filter(student=>student.marks>=70);
// let shreyas = pass.map(student=>student.name);
// console.log(shreyas);
// console.log(pass);
let pass = students.filter(student=>student.marks>=70).map(student=>student.name);
console.log(pass);




