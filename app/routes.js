// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

router.get('/clear-data', (req, res) => {
  req.session.data = {}
  res.redirect('/')
})

module.exports = router;
