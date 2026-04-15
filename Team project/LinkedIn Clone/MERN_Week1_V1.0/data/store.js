// data/store.js
const users = [];
const posts = [];
const requests = [];

let currentUser = null;

function getCurrentUser() {
    return currentUser;
}

function setCurrentUser(user) {
    currentUser = user;
}

module.exports = {
    users,
    posts,
    requests,
    getCurrentUser,
    setCurrentUser
};