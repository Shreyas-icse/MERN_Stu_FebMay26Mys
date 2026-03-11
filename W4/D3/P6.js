const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");


introBtn.addEventListener("click",function(){
    output.textContent = "Sending request ....";
    fetch("https://jsonplaceholder.typicode.com/posts/18")
    .then(function(response){
        return response.text();
    })
    .then(function(text){
        console.log("text response object: ",text);
        // output.textContent = "Status: "+response.status+"\nOk:"+response.ok;
        output.textContent =text;
    })
    .catch(function(error){
        output.textContent = "unexpected fetch error: "+error.message;
    });
});