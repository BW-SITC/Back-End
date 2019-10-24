
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {user_id: 1, meetingTime: 'Thursday 4pm'},
        {user_id: 1, meetingTime: 'Friday 2pm' },
        {user_id: 2, meetingTime: 'Monday 1pm'},
        {user_id: 2, meetingTime: 'Wednesday 3pm' }
      ]);
    });
};
