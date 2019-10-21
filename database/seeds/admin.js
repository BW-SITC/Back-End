
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adim').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        { username: 'admin', password: 'admin'},
      ]);
    });
};
