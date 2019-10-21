exports.up = function(knex) {
    return knex.schema
    
    .createTable('admin', admin => {
      users.increments();
  
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
        users.string('day')
        users.string('availibleTime', 128)
        users.string("country")
        
      })
      .createTable('meetings', tbl => {
        tbl.increments();
        tbl.integer('meeting_number')
          .unsigned()
          .notNullable();
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
      .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number')
          .unsigned()
          .notNullable();
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
    .dropTableIfExists('users')
   .dropTableIfExists('meetings')
   .dropTableIfExists('steps')
};
