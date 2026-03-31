//Sending JSON response in Express
const express = require('express');

const app = express();
app.get("/api/status",function(req,res){
    //res.Json() automatically serailizes the object and sets the JSON content type.
    res.json({
        success:true,
        message:"Express API is working"
    });
});
app.get("/api/error",function(req,res){
    res.status(404).json({
        success:false,
        message:"requested resource not found."
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
    
});
