//Route parameters and query parameters.
//route parameters :capture dynamic values fron the path.
//query parameters: provide optional values.
const express = require('express');

const app = express();
app.get("/products/:id",function(req,res){
        res.json({
            routeParameter:req.params.id,
            queryParameters:req.query
        });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
    
});
//http://localhost:4000/products/18?name=shreyas&role=admin (in browser)