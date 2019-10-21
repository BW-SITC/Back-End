const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findMeetings,
  removeMeeting,
};

function find() {
  return db('users').select('id', 'username', 'role');
}

function findBy(filter) {
  return db('users').where(filter);
}
function findMeetings(userId) {
    return db('meetings')
      .join('users', 'user.id', 'meetings.user_id')
      .where({ user_id: userId });
  }

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
    return db('users')
      .select('id', 'username')
      .where({ id })
      .first();
  }

function removeMeeting(id) {
    return db('meetings')
    .where('id', id)
    .del();
}