var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var db = require('../db/api');
var saltRounds = 10;

router.post('/signup', function(req, res, next) {
  console.log(req.body);
  db.findPersonByUsername(req.body.username).then( function(person){
    if(person){
      res.json("There is an error, O no!");
    } else {
      var hashedpassword = bcrypt.hashSync(req.body.password, saltRounds);
      console.log(hashedpassword);
      db.addPerson(req.body.username, hashedpassword);
      res.json("sucess, yes!");
      }
    })
  })


module.exports = router;
