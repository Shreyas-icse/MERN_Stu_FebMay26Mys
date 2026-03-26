//route parameters using manual path parsing
//here we learn to extract dynamic values from a URL path


const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.method === "GEt" && req.url.startsWith("/users/")){
        //split the path and pick the last section as route parameters
        const parts = req.url.split("/");
        const userID = parts[2];

        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({
            route:"/user/:id",
            userID:userID
        }));
        return;
    }
    //405:url route is valid but the method is not supported
    res.writeHead(405,{"Content-Type":"application/json"});
    res.end(JSON.stringify({message:"Method not allowed"}));

    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({message:"Route not found"}));
});
server.listen(3001, function () {
    console.log("Server is running at http://localhost:3001");
});
    