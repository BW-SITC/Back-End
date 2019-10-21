exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
    
        users
          .string('username', 128)
          .notNullable()
          .unique();
        users.string('password', 128).notNullable();
        users.string('availibleTime', 128)
        users.string("country")
        users.string("role",128).notNullable();
        
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
      });
    };


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
   .dropTableIfExists('meetings');
};
