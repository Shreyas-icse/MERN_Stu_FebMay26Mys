// modules/utils.js

// generate simple unique ID
function generateId() {
    return Date.now();
}

// find user by id
function findUserById(users, id) {
    return users.find(function(user) {
        return user.id === id;
    });
}

// find post by id
function findPostById(posts, id) {
    return posts.find(function(post) {
        return post.id === id;
    });
}

// print heading in CLI
function printHeading(text) {
    console.log("\n========== " + text + " ==========");
}

module.exports = {
    generateId,
    findUserById,
    findPostById,
    printHeading
};