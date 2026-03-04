//Nested Objects and Methods
const student = {
    firstName: "Shreyas",
    lastName:"kr",
    scores:{
        math:80,
        science:86
    },
    hobbies:["reading","singing"],
    fullname: function(){
        return this.firstName + " "+this.lastName
        },
        greet(){
            console.log("hi,",this,fullName());
            

        }
};
console.log(student);

console.log(student.fullname());

// console.log(student);

// console.log(student.scores);

// console.log(student.scores.science);
