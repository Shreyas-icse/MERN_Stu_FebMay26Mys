const emitter = require("./events");
let posts = [];
async function createPost(user, content) {
    try {
        const post = {
            id: posts.length + 1,
            authorId: user.id,
            content,
            timestamp: Date.now(),
            likes: [],
            comments: []
        };

        posts.push(post);
        emitter.emit("postCreated");
        return post;

    } catch (err) {
        emitter.emit("operationFailed", err);
    }
}

function likePost(user, post) {
    if (post.likes.includes(user.id)) return;

    post.likes.push(user.id);
    emitter.emit("postLiked");
}

function commentPost(user, post, text) {
    post.comments.push({
        userId: user.id,
        text
    });

    emitter.emit("commentAdded");
}

function getAllPosts() {
    return posts;
}

module.exports = {
    createPost,
    likePost,
    commentPost,
    getAllPosts
};