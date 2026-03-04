//jason Stringify parse
const employee = {
    id:101,
    name:"pavan",
    dept:"CSE",
    isActive:true
};
//json stringify
const jsonString =  JSON.stringify(employee);
console.log(jsonString);
console.log(employee);
//json parse
const parsedObject = JSON.parse(jsonString)
console.log(parsedObject);



