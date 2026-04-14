// modules/posts.js
const store = require("../data/store");
const appEvents = require("./events");

// create a post
function createPost(content) {
    const user = store.currentUser;

    if (!user) {
        appEvents.emit("operationFailed", "No user logged in");
        return;
    }

    const post = {
        id: store.nextPostId++,
        authorId: user.id,
        content: content,
        likes: [],
        comments: []
    };

    store.posts.push(post);
    appEvents.emit("postCreated", post);
}

// like a post
function likePost(postId) {
    const user = store.currentUser;

    const post = store.posts.find(function (p) {
        return p.id === postId;
    });

    if (!post) {
        appEvents.emit("operationFailed", "Post not found");
        return;
    }

    post.likes.push(user.id);
    appEvents.emit("postLiked", user, post);
}

// comment on post
function commentPost(postId, commentText) {
    const user = store.currentUser;

    const post = store.posts.find(function (p) {
        return p.id === postId;
    });

    if (!post) {
        appEvents.emit("operationFailed", "Post not found");
        return;
    }

    const comment = {
        userId: user.id,
        text: commentText
    };

    post.comments.push(comment);
    appEvents.emit("commentAdded", user, commentText);
}

module.exports = {
    createPost,
    likePost,
    commentPost
};