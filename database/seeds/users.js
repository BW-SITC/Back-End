
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'volunteer1', password: "password1", name: "kevin", days: "Monday - Friday", availibleTime: "8am - 5pm", country: "USA"},
        { username: 'volunteer2', password:"password2", name: "Jim", days: "Monday - Thursday", availibleTime: "10am - 4pm", country: "Spain"},
        
      ]);
    });
};
