const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(res,req)=>{
    res.status(200).json({
         success:true,
    message:"movie booking API is running.."
    });
   
});
module.exports = app;
