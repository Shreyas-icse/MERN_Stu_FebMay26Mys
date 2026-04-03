//Assigining roles to user and restricting access
const express = require("express");
const app = express();

app.use(function(req,res,next){
    req.user = {
        id:101,
        username:"shreyas",
        role:"admin"
    };
    next();
});

function requriedRole(role){
    return function(req,res,next){
        if(!req.user){
            return res.status(401).json({
                success:false,
                message:"Authentication requried"
            });
        }
        if(req.user.role!==role){
            return res.status(403).json({
                success:false,
                message:"Insufficient permission"
            });
        }
        next();
    }
}

app.get("/profile",function(req,res){
    res.json({
        success:true,
        message:"Profile page",
        user:req.user
    });
});

app.get("/admin",requriedRole("admin"),function(req,res){
    res.json({
        success:true,
        message:"admin page",
        user:req.user
    });
});


app.listen(4000,function(){
    console.log("Express session demo server running at http://localhost:4000");
});
