// innerText & textContent
// innerText: visible rendered text only
// textContent: all text nodes regardless of CSS
// innerHTML: allows reading or writing HTML markup inside an element

const message = document.getElementById("message");
const textContentBtn = document.getElementById("textContentBtn");
const resetBtn = document.getElementById("resetBtn");

// innerText button
document.getElementById("innerTextBtn").addEventListener("click", function () {
    message.innerText = "Updated using innerText";
});

// textContent button
textContentBtn.addEventListener("click", function () {
    message.textContent = "Updated using textContent";
});

// reset button
resetBtn.addEventListener("click", function () {
    message.innerText = "Original message";
});

// innerHTML example
const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click", function () {
    box.innerHTML = "<strong>Original</strong> content";
});