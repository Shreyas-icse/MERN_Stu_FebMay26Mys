// const question = document.getElementById("question");
// const answer = document.getElementById("answer");
// const submitBtn = document.getElementById("submitBtn");
// const deleteBtn = document.getElementById("deleteBtn");
// const message = document.getElementById("message");

// question.addEventListener("click",
//     function(event){
        
//         event.preventDefault();
//         const  qValue = question.value.trim();
//         if( qValue.length>=15){
//             message.textContent="at least 15 characters is requried";
//             message.style.color="red";
//             question.focus();
//             return;
//         }
//     });
//     answer.addEventListener("click",
//     function(event){
        
//         event.preventDefault();
//         const answer = answer.value.trim();
//         if(answer.length>=15){
//             message.textContent="at least 15 characters is requried";
//             message.style.color="red";
//             question.focus();
//             return;
//         }
//     });
//     let counter = 1;

// document.getElementById("submitBtn").addEventListener("click",function(){
//     message.textContent = "";
//     const li = document.createElement("li");
//     li.textContent = "Item " + counter++;
//    question.appendChild(li);
// });





// const question = document.getElementById("question");
// const answer = document.getElementById("answer");
// const submitBtn = document.getElementById("submitBtn");
// const deleteBtn = document.getElementById("deleteBtn");
// const message = document.getElementById("message");
// const faqList = document.getElementById("faqList");

// let counter = 1;

// submitBtn.addEventListener("click", function (event) {

//     event.preventDefault();

//     const qValue = question.value.trim();
//     const aValue = answer.value.trim();

//     if (qValue.length < 5) {
//         message.textContent = "Question must be at least 15 characters";
//         message.style.color = "red";
//         question.focus();
//         return;
//     }

//     if (aValue.length < 5) {
//         message.textContent = "Answer must be at least 15 characters";
//         message.style.color = "red";
//         answer.focus();
//         return;
//     }

//     message.textContent = question.value+" "+answer.value;
//     message.style.color = "black";

//     const h1 = document.createElement("h1" );
   

//     faqList.appendChild(h1);
    

    
// });
// h1.querySelector(".deleteBtn").addEventListener("click", function () {
//         faqList.removeChild(h1);
//      if(!faqList.lastElementChild){
//         faqList.removeChild(faqList.lastElementChild);
//     } 
//     else {
//         message.textContent = "There is no item to be deleted";
//     }

// });




const question = document.getElementById("question");
const answer = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const faqList = document.getElementById("faqList");

submitBtn.addEventListener("click", function (event) {

    event.preventDefault();

    const qValue = question.value.trim();
    const aValue = answer.value.trim();

    if (qValue.length < 5) {
        message.textContent = "Question must be at least 5 characters";
        message.style.color = "red";
        question.focus();
        return;
    }

    if (aValue.length < 5) {
        message.textContent = "Answer must be at least 5 characters";
        message.style.color = "red";
        answer.focus();
        return;
    }

    message.textContent = "FAQ added successfully";
    message.style.color = "green";

    const faqBlock = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.textContent = qValue;

    const p = document.createElement("p");
    p.textContent = aValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        faqList.removeChild(faqBlock);

        if (!faqList.lastElementChild) {
            message.textContent = "All FAQs removed";
            message.style.color = "red";
        }
    });

    faqBlock.appendChild(h3);
    faqBlock.appendChild(p);
    faqBlock.appendChild(deleteBtn);
   

    faqList.appendChild(faqBlock);

    question.value = "";
    answer.value = "";
});
