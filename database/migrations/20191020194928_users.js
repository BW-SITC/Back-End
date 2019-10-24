exports.up = function(knex) {
    return knex.schema
    
    .createTable('admin', admin => {
      admin.increments();
  
      admin
        .string('username', 128)
        .notNullable()
        .unique();
      admin.string('password', 128).notNullable();
    })
    
    .createTable('users', users => {
        users.increments();
        users
          .string('username', 128)
          .notNullable()
          .unique();
        users.string('password', 128).notNullable();
        users.string('name')
        users.string('days')
        users.string('availibleTime', 128)
        users.string("country")
        
      })
      .createTable('meetings', tbl => {
        tbl.increments();
        tbl.text('meetingTime')
          .notNullable();
        tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
      .createTable('todos', tbl => {
        tbl.increments();
        tbl.text('instructions')
          .notNullable();
        tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
    };


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('admin')
    .dropTableIfExists('users')
   .dropTableIfExists('meetings')
   .dropTableIfExists('todos')
};
