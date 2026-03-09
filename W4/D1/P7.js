//get element by id
console.log("Document Object:",document);
console.log("Page title",document.title);

// const heading = document.getElementById("mainHeading");
// console.log("Heading Text",heading.textContent);

//getElementByClass
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");
// run.addEventListener("click",function(){
//     for(let i=0;i<info.length;i++){
//         console.log(info[i].textContent);
//         info[i].style.color="blue";
        
//     }
// })

//getElementbyTag
const spanTag = document.getElementsByTagName("span");
run.addEventListener("click",function(){
    for(let i=0;i<info.length;i++){
        console.log(info[i].textContent);
        info[i].style.color="blue";
        
    }
    for(let i=0;i<spanTag.length;i++){
       spanTag[i].style.backgroundColor = "lightgreen";
        
    }
    const mainFirstHeading = document.querySelector(".mainHeading");
mainFirstHeading.style.color = "red";
});


//Query selector:returns the first element matching a css selector
// const mainFirstHeading = document.querySelector(".mainHeading");
// mainFirstHeading.style.color = "red";

//Ouery selector all :return all elements matching the selector
const tasks =document.querySelectorAll(".task");
// tasks.style.color = "purple";
tasks.forEach(function(task){
    task.style.color = "purple";
})
