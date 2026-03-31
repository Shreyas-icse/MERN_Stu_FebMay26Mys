// Handling different HTTP methods in Express
const express = require('express');

const app = express();

//to read .
app.get("/users",function(req,res){
    res.status(200).json([{message:"success"},
        {id:1,name:"Shreyas"},
        {id:2,name:"Pavan"},
        {id:3,name:"Vinay"},
        {id:4,name:"Rakesh"},
    ]);
    
    // res.send("Returning all users");
});

//to create
app.post("/users",function(req,res){
    //res.status() sets the HTTP status code before sending the response body.
    res.status(201).send("user created.");
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
    
});
//curl -X POST http://localhost:4000/users 