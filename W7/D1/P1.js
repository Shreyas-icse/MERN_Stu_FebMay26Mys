//basics of expressJS -set up a server
//npm init -y
//npm install express

//Import module of express

const express = require('express');
//calling express() creates the main application object ,This object is used to register routes and middleware .
const app = express();
//app.get() handles GET requests to the specified path.
app.get("/",function(req,res){
    //re.send() sends a response body and ends the request automatically.
    res.send("hello from express server");
});

//listen is the function that starts the server on a chosen port number.
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
    
});