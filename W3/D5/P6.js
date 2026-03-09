//prevent default with events 
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const message = document.getElementById("message");

form.addEventListener("submit",function(event){   //event user defined
    //stop page reload
    event.preventDefault();
    if(username.value.trim()===""){
        message.textContent = "Username is requried";
        console.log("Form blocked: no input for username");
        return;
        
    }
    message.textContent = "Form handled by JS for user",username.value;
    console.log("Form submitted with username",username.value);
    
});