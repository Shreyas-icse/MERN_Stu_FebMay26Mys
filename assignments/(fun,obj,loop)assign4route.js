// const wallet = {
//   owner: "Shreyas",
//   balance: 1000,
//   lasttransaction:"null"
// };


//  deposit(balance)
//     this.balance +=balance;
//     return balance;
    
  

//  console.log(deposite.balance);
// Function expression
const getRoute = function(role, isLoggedIn) {

    // Login check using if-else
    if (!isLoggedIn) {
        return "/login";
    } 
    else {
        // Role routing using switch
        switch (role) {
            case "admin":
                return "/admin";

            case "student":
                return "/student";

            case "college":
                return "/college";

            case "proctor":
                return "/proctor";

            default:
                return "/denied";
        }
    }
};


// Example tests
console.log(getRoute("admin", true));     // /admin
console.log(getRoute("student", true));   // /student
console.log(getRoute("college", true));   // /college
console.log(getRoute("proctor", true));   // /proctor
console.log(getRoute("guest", true));     // /denied
console.log(getRoute("admin", false));    // /login
 
 

