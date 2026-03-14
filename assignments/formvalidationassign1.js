const signupForm = document.getElementById("signupForm");
const conformPassword= document.getElementById("conformPassword");
const signupPassword = document.getElementById("signupPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit",
    function(event){
        event.preventDefault();
        
        const password = signupPassword.value;
        const conform=conformPassword.value;
        // console.log(signupForm.nextElementSibling.signupPassword.value);
       if(password===conform){
            message.textContent="Valid  Password entered";
            message.style.color="green";
        
        }
        else{
             message.textContent="Password not matching";
             message.style.color="red";
        };
        
    }
);
