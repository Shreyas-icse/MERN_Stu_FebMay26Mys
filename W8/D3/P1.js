//validation and schema constraints
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{type:Number,min:18},
    role:{type:String,
        enum: ["admin","user","manager"]
    },
    email:{
        type:String,//. - multiple occurance of character and + indicate at least one character
        match:/.+@.+\..+/
        //word@domain.com .co.in  /.org 
    }
});

const User =  mongoose.model("HookValidationUser",userSchema);

async function runValidationDemo(){
    try{
        const invalidUser = new User ({
            age:15,
            role:"guest",
            email:"notvalidemail"
        });
       

        // await invalidUser.validate();

         const validUser = new User({
            name:"Shreyas",
            age:25,
            role:"admin",
            email:"s@s.com"
        });
        await validUser.validate();
    }
    catch(error){
        console.log("Validation errors found:");
        
        for (const fieldName in error.errors){
            console.log(fieldName+":"+error.errors[fieldName].message);
            
        }
    }
}
runValidationDemo();