// Feature 11: Auto Save Contact Form

function initFormAutoSave() {

    const form = document.getElementById("contact-form");

    if (!form) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // SAVE DATA on typing
    form.addEventListener("input", function () {

        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        localStorage.setItem("contactData", JSON.stringify(formData));
    });

    // LOAD DATA on page load
    const savedData = JSON.parse(localStorage.getItem("contactData"));

    if (savedData) {
        nameInput.value = savedData.name || "";
        emailInput.value = savedData.email || "";
        messageInput.value = savedData.message || "";
    }
}