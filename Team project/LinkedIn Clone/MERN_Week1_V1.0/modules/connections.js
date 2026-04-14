// modules/connections.js
const store = require("../data/store");
const appEvents = require("./events");

// send request
function sendRequest(targetUserId) {
    const sender = store.currentUser;
    const receiver = store.users.find(function (user) {
        return user.id === targetUserId;
    });

    if (!sender || !receiver) {
        appEvents.emit("operationFailed", "User not found");
        return;
    }

    if (sender.id === receiver.id) {
        appEvents.emit("operationFailed", "Cannot connect with yourself");
        return;
    }

    const request = {
        senderId: sender.id,
        receiverId: receiver.id,
        status: "pending"
    };

    store.connectionRequests.push(request);

    appEvents.emit("connectionRequested", sender, receiver);
}

// accept request
function acceptRequest(senderId) {
    const currentUser = store.currentUser;

    const request = store.connectionRequests.find(function (req) {
        return (
            req.senderId === senderId &&
            req.receiverId === currentUser.id &&
            req.status === "pending"
        );
    });

    if (!request) {
        appEvents.emit("operationFailed", "Request not found");
        return;
    }

    request.status = "accepted";

    currentUser.connections.push(senderId);

    const sender = store.users.find(function (user) {
        return user.id === senderId;
    });

    sender.connections.push(currentUser.id);

    appEvents.emit("connectionAccepted", sender, currentUser);
}

module.exports = {
    sendRequest,
    acceptRequest
};