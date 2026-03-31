//built-in Middleware
const express = require('express');

const app = express();
app.use(express.json());
//express.urlencoded()  parse form-style data.
//extended:false is a beginner friendly config.
app.use(express.urlencoded({extended:false}));

app.post("/api/users",function(req,res){
    res.status(201).json({
        success:true,
        parsedBody:req.body
    });
});

app.post("/form",function(req,res){
    res.json({
        success:true,
        formData:req.body
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
    
});
//curl -X POST http://localhost:4000/api/users -H "Content-Type:application/json" -d "{\"name\":\"Shreyas\",\"role\":\"admin\"}"
//curl -X POST http://localhost:4000/form -H "Content-Type:application/x-www-form-urlencoded" -d "name=Shreyas&role=admin"  


