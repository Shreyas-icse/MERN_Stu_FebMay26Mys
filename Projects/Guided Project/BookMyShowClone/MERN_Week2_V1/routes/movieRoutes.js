//Handales requests releated to movie
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController");

const roleMiddleware  = require("../middleware/roleMiddleware");

const router = express.Router();
//this enters to home page
router.get("/",getHome);
//send req to get all the movies
router.get("/movies",getAllMovies);
//send req to get all the movies by id
router.get("/movies/:id",getMovieById);
// send req tocreating new movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
//send req to update movie details
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
//send a req to delete a movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);

module.exports = router;

