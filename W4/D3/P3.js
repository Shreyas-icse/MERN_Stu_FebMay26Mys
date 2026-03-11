const themeinput = document.getElementById("themeinput");
const output = document.getElementById("output");



document.getElementById("saveBtn").addEventListener("click",function(){
    sessionStorage.setItem("theme",themeinput.value);
    sessionStorage.setItem("userName","shreyas");
    sessionStorage.setItem("loggedIn","true");
    console.log("Saved theme: ",themeinput.value);
    output.textContent="datastored successfully";
    output.style.color = "green";    
});
document.getElementById("readBtn").addEventListener("click",function(){
    // sessionStorage.getItem("theme",themeinput);
    const theme = sessionStorage.getItem("theme");
    
    
    // console.log("Saved theme: ",themeinput.value);
    output.textContent="theme is : "+ theme;
    output.style.color = "green";    
});
document.getElementById("removeBtn").addEventListener("click",function(){
    
    const theme = sessionStorage.removeItem("loggedIn");
      
    output.textContent="Removed 'loggedIn' ";
    output.style.color = "green";    
});
document.getElementById("clearBtn").addEventListener("click",function(){
    
    const theme = sessionStorage.clear();
      
    output.textContent="cleared ";
    output.style.color = "green";    
});