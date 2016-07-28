var knex = require('./knex');

module.exports = {
  findPersonByUsername: function(username){
    return knex('person').select().where({username: username}).first();
  },
  addPerson: function(username, hashedpassword){
    return knex('person').insert({username: username, password: hashedpassword}, 'id');
  }
}
