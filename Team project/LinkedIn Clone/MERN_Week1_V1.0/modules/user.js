// modules/user.js
const store = require("../data/store");
const appEvents = require("./events");

// create profile using Promise
function createProfile(name, headline) {
    return new Promise(function (resolve, reject) {
        if (!name || !headline) {
            appEvents.emit("operationFailed", "Name and headline required");
            reject("Name and headline required");
            return;
        }

        const user = {
            id: store.nextUserId++,
            name: name,
            headline: headline,
            skills: [],
            education: [],
            experience: [],
            connections: []
        };

        store.users.push(user);
        store.currentUser = user;

        appEvents.emit("profileCreated", user);
        resolve(user);
    });
}

// get logged in user
function getCurrentUser() {
    return store.currentUser;
}

// get all users
function getAllUsers() {
    return store.users;
}

module.exports = {
    createProfile,
    getCurrentUser,
    getAllUsers
};