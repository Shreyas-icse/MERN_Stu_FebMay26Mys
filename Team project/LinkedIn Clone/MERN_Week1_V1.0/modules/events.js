// modules/events.js
const EventEmitter = require("events");
const chalk = require("chalk");

const appEvents = new EventEmitter();

appEvents.on("profileCreated", function (user) {
    console.log(chalk.green("Profile created for " + user.name));
});

appEvents.on("postCreated", function (post) {
    console.log(chalk.blue("Post created: " + post.content));
});

appEvents.on("operationFailed", function (error) {
    console.log(chalk.red("Error: " + error));
});

module.exports = appEvents;