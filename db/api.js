var knex = require('./knex');

module.exports = {
  findPersonByUsername: function(username){
    return knex('person').select().where({username: username}).first();
  },
  addPerson: function(username, hashedpassword){
    return knex('person').insert({username: username, password: hashedpassword}, 'id');
  },
  getAllRows: function(){
    return knex('task').select();
  },
  getRowFromPerson: function(personID){
    return knex('task').select().where({personID: personID});
  },
  addTask: function(task, personID) {
    return knex('task').insert({task: task, started: false, done: false, personID: personID});
  },
  editTask: function(id, task, started, done) {
    return knex('task').where({id: id}).update({ task: task, started: started, done: done});
  },
  deleteTask: function(id) {
    return knex('task').where({id: id}).del();
  }
}
