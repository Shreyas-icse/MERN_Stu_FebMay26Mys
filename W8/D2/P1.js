//Virtual fields in Mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
},
    {
        //This allows virtual to appear when converting documents to JSON or objects
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });

//A virtual field is not stored on MongoDB. it is computed dynamically from existing stored fields
userSchema.virtual("fullname").get(function () {
    return this.firstName + " " + this.lastName;
});

const User = mongoose.model("Virtual", userSchema);

const user = new User({
    firstName: "Shreyas",
    lastName: "kr",
    email: "s@s.com"
});

console.log("Hello, ",user.fullname);
console.log("Object output includes virtual  ",user.toObject());

