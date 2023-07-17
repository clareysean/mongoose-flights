var express = require('express');
var router = express.Router();
var flightsCtrl = require("../controllers/flights");
var destinationssCtrl = require("../controllers/destinations")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.post('/:id', destinationssCtrl.update)
router.post('/', flightsCtrl.create)

module.exports = router;
