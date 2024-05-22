// External dependencies
const express = require('express');
const router = express.Router();

var fs = require('fs');
var path = require('path');
var process = require('process');

// Add your routes here - above the module.exports line

router.get('/clear-data', (req, res) => {
  req.session.data = {}
  res.redirect('/')
})

router.post('/pickFilter', function (req, res) {
    var att = req.session.data['selectedAttrib'];
    console.log(att)
  if (att == "Pick a standard filter from a library"){
    res.redirect('add-filter-library')
  } else {
    res.redirect('add-filter?sel='+att)
  }
})

module.exports = router;
