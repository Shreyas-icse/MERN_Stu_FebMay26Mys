// modules/validator.js

// validate user name
function validateName(name) {
    return name && name.trim().length > 0;
}

// validate email
function validateEmail(email) {
    return email && email.includes("@");
}

// validate post content
function validatePost(content) {
    return content && content.trim().length > 0;
}

module.exports = {
    validateName,
    validateEmail,
    validatePost
};