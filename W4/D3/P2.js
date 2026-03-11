const themeinput = document.getElementById("themeinput");
const output = document.getElementById("output");



document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeinput.value);
    localStorage.setItem("userName","shreyas");
    localStorage.setItem("loggedIn","true");
    console.log("Saved theme: ",themeinput.value);
    output.textContent="datastored successfully";
    output.style.color = "green";    
});
document.getElementById("readBtn").addEventListener("click",function(){
    // localStorage.getItem("theme",themeinput);
    const theme = localStorage.getItem("theme");
    
    
    // console.log("Saved theme: ",themeinput.value);
    output.textContent="theme is : "+ theme;
    output.style.color = "green";    
});
document.getElementById("removeBtn").addEventListener("click",function(){
    
    const theme = localStorage.removeItem("loggedIn");
      
    output.textContent="Removed 'loggedIn' ";
    output.style.color = "green";    
});
document.getElementById("clearBtn").addEventListener("click",function(){
    
    const theme = localStorage.clear();
      
    output.textContent="cleared ";
    output.style.color = "green";    
});