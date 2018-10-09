const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/', function(req, res){
    Item.find()
        .then(function(items) {
            res.json(items)
        })
});

// @route  Post api/items
// @desc   Create an Item
// @access Public
router.post('/', function(req, res){
  const newItem = new Item({
      name: req.body.name
  });

  newItem.save().then(function(item) {
      res.json(item)
  });
});

// @route  DELETE api/items/:is
// @desc   Delete an Item
// @access Public
router.delete('/:id', function(req, res){
    Item.findById(req.params.id).then(function(item) {
        item.remove().then(function() {
            res.json({success:true});
        })
    }).catch(function(err) {
        res.status(404).json({success: false})
    })
  });

module.exports = router;