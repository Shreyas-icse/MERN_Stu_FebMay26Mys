//using  a custom commonJs module (custom - what we have created not inbuilt)

const {calculateTax,applyDiscount,formateCurrency} = require("./P2");
const itemName = "Laptop";
const basePrice = "60000";

const discountedPrice = applyDiscount(basePrice,10);
const taxAmount = calculateTax(discountedPrice);
const finalPrice = discountedPrice + taxAmount;

console.log("Item: ",itemName);
console.log("Base Price: ",formateCurrency(basePrice));
console.log("Discounted price: ",formateCurrency(discountedPrice));
console.log("GSt tax @18: ",formateCurrency(taxAmount));
console.log("Final price: ",formateCurrency(finalPrice));








