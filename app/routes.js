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



router.post('/pickFilter', function (req, res) {
    var att = req.session.data['selectedAttrib'];
  if (att == "Pick a standard filter from a library"){
    res.redirect('v004/add-filter-library')
  } else {
    // res.redirect('v004/add-filter?att='+att);
    res.render('v004/add-filter', {att: att})

    // res.redirect("v004/add-filter?newVal="+att);

  }
})


router.post('/summary-filters', function (req, res) {
  var type = req.session.data['personAttributeSelector'].value;
  var suf1 = req.session.data['outputSuff1'];
  var suf2 = req.session.data['outputSuff2'];

res.render('v004/summary-filters', {type: type, suf1:suf1, suf2:suf2})

    // res.redirect('v004/summary-filters')
})




module.exports = router;
