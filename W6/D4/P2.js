//Creating a simple HTTP server

const http = require("http");

//createServer():creates a HTTP server instance
//Accepts a callback with two important objects
//1. request object : incoming request details
//2. res : outgoing response control


const server = http.createServer(function(req,res){
    //writeHead is a function that is used set the res status code and headers
    res.writeHead(200,{"content-type":"text/plain"});
    //end() sends the response body and closes the response
    res.end("Hello from NodeJS HTTP sever.")
});


//listen() binds the server to a port and starts accepting request
server.listen(3000,function(){
    console.log("server is running at http://localhost:3000");   
});