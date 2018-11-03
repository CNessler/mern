const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/Reservation');

// @route  GET api/rsvps
// @desc   Get All RSVPS
// @access Public
router.get('/', function(req, res){
    Item.find()
        .then(function(items) {
            res.json(items)
        })
});

// @route  Post api/rsvps
// @desc   Create a Reservation
// @access Public
router.post('/', function(req, res){
    console.log("REQUEST**************");
  const newReservation = new Reservation({
      name: req.body.name,
      attending: req.body.attending,
      songOne: req.body.songOne,
      songTwo: req.body.songTwo
  });

  newReservation.save().then(function(rsvp) {
      res.json(rsvp)
  });
});


module.exports = router;