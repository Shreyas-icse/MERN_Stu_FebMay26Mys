// index.js
const readline = require("readline");
const { createProfile, getCurrentUser } = require("./modules/user");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== LinkedIn CLI Clone ===");

rl.question("Enter your name: ", function (name) {
    rl.question("Enter your headline: ", function (headline) {
        createProfile(name, headline)
            .then(function () {
                console.log("\n Current Logged In User:");
                console.log(getCurrentUser());
                rl.close();
            })
            .catch(function (error) {
                console.log("Error:", error);
                rl.close();
            });
    });
});