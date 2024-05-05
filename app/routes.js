// External dependencies
const express = require('express');

const router = express.Router();


var fs = require('fs');
var path = require('path');
var process = require('process');

const filesArray = fs.readdirSync("./app/views/v004/")
const workingD = process.cwd();


//
// var walk = function(dir) {
//     let results = [], err = null, list;
//     try {
//
//
//         list = fs.readdirSync(dir)
//
//
//
//     } catch(e) {
//         err = e.toString();
//     }
//     if (err) return err;
//     var i = 0;
//     return (function next() {
//         var file = list[i++];
//
//         if(!file) return results;
//         file = path.resolve(dir, file);
//         let stat = fs.statSync(file);
//         if (stat && stat.isDirectory()) {
//           let res = walk(file);
//           results = results.concat(res);
//
//
//           return next();
//         } else {
//           results.push(file);
//            return next();
//         }
//
//     })();
//
// };
// const listArray = walk("./app/views/v003");

// Add your routes here - above the module.exports line

router.get('/clear-data', (req, res) => {
  req.session.data = {}
  res.redirect('/')
})

router.get('/', (req, res) => {

  res.render('index', {workingD: workingD, filesArray:filesArray})

})

module.exports = router;
