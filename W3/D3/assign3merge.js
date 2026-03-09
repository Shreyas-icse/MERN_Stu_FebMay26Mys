const student = {
    name:"shreyas",
    age :25,
    city:"delhi"
};
const worker = {
    name:"nivas",
    age:25,
    city:"mysore"
}

const jsonString =  JSON.stringify(student);
console.log(jsonString);
const parse=JSON.parse(jsonString);
console.log(parse);
const jsonStrings =  JSON.stringify(worker);
console.log(jsonStrings);
const parseObj=JSON.parse(jsonStrings);
console.log(parseObj);
//merge 
const mergedObject = { ...parse, ...parseObj };

console.log("Merged Object:", mergedObject);
