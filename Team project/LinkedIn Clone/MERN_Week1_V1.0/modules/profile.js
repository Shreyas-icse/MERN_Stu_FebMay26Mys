// modules/profile.js
const store = require("../data/store");
const appEvents = require("./events");

// add a skill
function addSkill(skill) {
    const user = store.currentUser;

    if (!user) {
        appEvents.emit("operationFailed", "No user logged in");
        return;
    }

    user.skills.push(skill);
    appEvents.emit("profileCreated", user);
}

// add education
function addEducation(education) {
    const user = store.currentUser;

    if (!user) {
        appEvents.emit("operationFailed", "No user logged in");
        return;
    }

    user.education.push(education);
    appEvents.emit("profileCreated", user);
}

// add experience
function addExperience(experience) {
    const user = store.currentUser;

    if (!user) {
        appEvents.emit("operationFailed", "No user logged in");
        return;
    }

    user.experience.push(experience);
    appEvents.emit("profileCreated", user);
}

module.exports = {
    addSkill,
    addEducation,
    addExperience
};