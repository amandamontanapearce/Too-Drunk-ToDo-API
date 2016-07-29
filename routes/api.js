var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');

router.get('/task', function(req, res, next){
  db.getAllRows().then( function(task){
    res.json({task: task});
  })
})

router.get('/task/:id', function(req, res, next){
  db.getRowFromPerson(req.params.id).then( function(task){
    res.json({task: task});
  })
})

router.post('/task', function(req, res, next){
  db.addTask(req.body.task, req.body.personID).then( function(task){
    res.json("Your task was added, congrats drunkie!");
  })
})

router.put('/task/:id', function(req, res, next){
  db.editTask(req.params.id, req.body.task, req.body.started, req.body.done).then( function(){
    res.json("task updated!");
  })
})

router.delete('/task/:id', function(req, res, next){
  db.deleteTask(req.params.id).then( function(){
    res.json("task deleted!")
  })
})

module.exports = router;
