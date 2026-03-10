const container = document.getElementById("container");
//positions:
//beforebegin
//afterbegin
//beforeend
//afterend
// document.getElementById("btn").addEventListener("click",function(){
//     container.insertAdjacentHTML("beforeend","<p>Dynamically inserted</p>");
// });
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("afterbegin","<p>Dynamically inserted</p>");
});