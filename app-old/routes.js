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


router.post("/reservist1-handler", function (req, res) {

        if (req.session.data['see-candidate'] == "yes") {
                res.redirect('/reserve-list-01/step-2')
        } else {
                res.redirect('/reserve-list-01/task-list')
        }
})

router.post('/pickFilter', function (req, res) {
    var att = req.session.data['selectedAttrib'];
    console.log(att)
  if (att == "Pick a standard filter from a library"){
    res.redirect('v004/add-filter-library')
  } else {
    res.redirect('v004/add-filter?sel='+att)

    // res.redirect("v004/add-filter?newVal="+att);

  }
})

module.exports = router;
