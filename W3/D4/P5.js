//reduce method
let nums = [5,10,15];

let total = nums.reduce((intermediateSum,current)=>intermediateSum+current,0);
console.log(total);
let avg = nums.reduce((intermediateSum,current)=>intermediateSum+current/nums.length,0);
console.log(avg);

//reduce to object count by category
let items = ["pen","pencil","pen","box"];
let count = items.reduce((intermediateValue,item)=>{
    intermediateValue[item]=(intermediateValue[item]||0)+1
    return intermediateValue;
},{});
console.log("Item count:",count);


