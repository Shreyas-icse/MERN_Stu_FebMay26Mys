const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");
const postIdInput = document.getElementById("postIdInput");
asyncFetchBtn.addEventListener("click",async function(){
    // output.textContent = "Loading user ...";
     const id = postIdInput.value;
        if(id===""){
            output.textContent = "Post ID is requried.";
            return;
        }
        const numericId = Number(id);
        if(numericId <1 || numericId >100){
            output.textContent = "Enter valid id b/w 1 & 100";
            return;   
        } 
    try{
        output.textContent = "Fetching post ...";
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+numericId);//await to keep tarck of every response it waits untill the response resived.
        if(!response.ok) throw new Error("HTTP error:"+response.status);
        const data = await response.json();
        output.textContent = JSON.stringify(data,null,2);
     }
    catch(error){
        output.textContent = "Error:"+error.message;
     }
});