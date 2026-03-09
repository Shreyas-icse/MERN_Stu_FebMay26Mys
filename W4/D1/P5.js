//Breakpoint(break in the code executed ,enters to the debugging mode)
//Inspect the variable values
//view the call stack
//Step through code line by line
//Evaluate the expression in the console
//watch how the variables change during the execuation
//to find logical errors
//browser
function calculateTotal(prices){
    let total = 0;
    for(let i = 0;i<prices.length;i++){
        let price = prices[i];
        debugger;
        total+=price;
    }
    return total;
}

let cart = [100,250,150,1000,220];

console.log("total: ",calculateTotal(cart));
// console.log(document.body);


