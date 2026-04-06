//cancel.js
//to cancel the existing booking if exists
const bookingEmitter = require("./events");
const {getCurrentBooking,clearCurrentBooking} = require("./booking");

function cancelBooking(movies){
    const booking = getCurrentBooking();

    if(!booking){
        bookingEmitter.emit("bookingFailed","No booking found to cancel.");
        return null;
    }
    const movie = movies.find((m)=>m.id===booking.movieId);
    if(!movie){
        bookingEmitter.emit("bookingFailed","Movie data not found while cancelling booking");
        return null;
    }

    const showTime = movie.showtimes.find((show)=>show.time.toLowerCase()===booking.time.toLowerCase);
    if(!showTime){
        bookingEmitter.emit("bookingFailed","Showtime data not found");
        return null;
    }
    //restore seats
    showTime.seatsAvailable += booking.seatCount;
    //clear current booking
    clearCurrentBooking();
    bookingEmitter.emit("bookingCancel",booking);
    return booking;
}

module.exports = {
    cancelBooking
};