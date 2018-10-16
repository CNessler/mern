const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const ReservationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    attending: {
        type: Boolean,
        required: true
    }
});

module.exports = Reservation = mongoose.model('Reservation', ReservationSchema);