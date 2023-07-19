var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/:id/new', ticketsCtrl.new);
router.post('/:id/new', ticketsCtrl.create);

module.exports = router;
