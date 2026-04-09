//handling req releated to bookings
const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");
const {
    bookingValadationhandler,
    createBooking,
    getAllBookings,
    getMyBookings
} = require("..//controllers/bookingController");

const router = express.Router(); 

//Create a booking /to book ticket/s
router.post("/bookings",authMiddleware,bookingValadationhandler,createBooking);

router.get("/bookings/me",authMiddleware,getMyBookings);

router.get("/bookings",authMiddleware,roleMiddleware("admin"),getAllBookings);

module.exports = router;