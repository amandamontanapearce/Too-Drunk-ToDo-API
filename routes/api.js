var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');

router.get('/task', function(req, res, next){
  console.log('hitting')
  // res.json(db.getAllRows());
})

module.exports = router;
