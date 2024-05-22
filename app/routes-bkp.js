// External dependencies
const express = require('express');

const router = express.Router();



var walk = function(dir) {
    let results = [], err = null, list;
    try {


        list = fs.readdirSync(dir)



    } catch(e) {
        err = e.toString();
    }
    if (err) return err;
    var i = 0;
    return (function next() {
        var file = list[i++];

        if(!file) return results;
        file = path.resolve(dir, file);
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
          let res = walk(file);
          results = results.concat(res);


          return next();
        } else {
          results.push(file);
           return next();
        }

    })();

};

const listArray = walk("./app/views/v005");

const currentDir = "/v005/";

var fs = require('fs');
var path = require('path');
var process = require('process');

const filesArray = fs.readdirSync("./app/views/v005/")
const workingD = process.cwd();


// Add your routes here - above the module.exports line

router.get('/clearer-data', (req, res) => {
  req.session.data = {}
  res.redirect('/')
})



// router.use('/csu71', require('./views/csu71/_routes'));
// /manage-a-vaccination-campaign-prototype/app/views/v005/_routes
// /csjobs-unified-hiring-side/app/views/csu71
router.use('/v005', require('./views/v005/_routes'));
console.log("router.use")
router.use('/v004', require('./views/v004/_routes'));
router.use('/v003', require('./views/v003/_routes'));
router.use('/v002', require('./views/v002/_routes'));
router.use('/v001', require('./views/v001/_routes'));

router.get('/filter', (req, res) => {
  req.session.data = {}
  res.redirect('/v005/index')
})


router.get('/', (req, res) => {
      console.log(workingD)
  res.render('index', {currentDir: listArray, workingD: workingD, filesArray:filesArray})

})

// router.use('/', require('./views'));



//
// router.use('/v005', require('./views/005/_routes_v005'));
// router.use('/v004', require('./views/004/_routes_v004'));
// router.use('/v003', require('./views/003/_routes_v003'));
// router.use('/v002', require('./views/002/_routes_v002'));
// router.use('/v001', require('./views/001/_routes_v001'));


module.exports = router;
