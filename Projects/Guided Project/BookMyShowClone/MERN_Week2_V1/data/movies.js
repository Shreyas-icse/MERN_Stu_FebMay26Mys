//Movies.js
// This file stores the movie data used in the CLI App

const movies = [
    {
        id:1,
        title:"Dhurandar2",
        language:"Hindi",
        genre:"Action Thriller",
        city:"Mysore",
        cinema:"Nexus Mall-Screen 1",
        showTimes:[
            {time: "10:00 AM",seatsAvailable:100},
            {time: "1:00 PM",seatsAvailable:250},
            {time: "6:00 AM",seatsAvailable:300}
        ]
    },
    {
        id:2,
        title:"LoveMoktile",
        language:"Kannada",
        genre:"Romantic ",
        city:"Mysore",
        cinema:"DRC Mall-Screen 2",
        showTimes:[
            {time: "10:00 AM",seatsAvailable:100},
            {time: "1:00 PM",seatsAvailable:70},
            {time: "6:00 AM",seatsAvailable:300}
        ]
    },
    {
        id:3,
        title:"KGF",
        language:"Kannada",
        genre:"Action Thriller",
        city:"Mysore",
        cinema:"Mall of Mysore-Screen 1",
        showTimes:[
            {time: "11:00 AM",seatsAvailable:100},
            {time: "4:00 PM",seatsAvailable:70},
            {time: "8:00 AM",seatsAvailable:300}
        ]
    }
];
//Export the movie data so that other file can use it
module.exports = movies;