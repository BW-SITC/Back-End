
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {user_id: 1, instructions: 'make a lesson plan'},
        {user_id: 1, instructions: 'research relevent subject matter' },
        {user_id: 2, instructions: 'learn more about your students'},
        {user_id: 2, instructions: 'work on building teaching materials' }
      ]);
    });
};
