exports.up = function(knex) {
    return knex.schema
      .createTable('todos', tbl => {
        tbl.increments();
        tbl.text('todo_name', 128)
          .unique()
          .notNullable();
      })
      .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number')
          .unsigned()
          .notNullable();
        tbl.text('instructions')
          .notNullable();
        tbl.integer('todo_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('todos')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('steps')
      .dropTableIfExists('todos');
  };
  