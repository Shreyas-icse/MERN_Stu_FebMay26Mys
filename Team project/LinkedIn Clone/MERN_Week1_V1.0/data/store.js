// data/store.js
// Central in-memory storage for LinkedIn CLI Clone

const store = {
    users: [],                // all user profiles
    currentUser: null,       // currently logged-in user
    connectionRequests: [],  // pending + accepted + rejected requests
    posts: [],               // all posts in session
    nextUserId: 1,           // auto increment user ID
    nextPostId: 1            // auto increment post ID
};

module.exports = store;