const db = require('../database/dbConfig.js');

module.exports = {
  add,
  addAdmin,
  find,
  findBy,
  findById,
  findMeetings,
  addMeeting,
  removeMeeting,
  findSteps,
  addSteps,
  removeSteps,

};

function find() {
  return db('users').select('id', 'name','day','availibleTime','country' );
}

function findBy(filter) {
  return db('users').where(filter);
}

async function addAdmin(admin) {
  const [id] = await db('admin').insert(admin);

  return findById(id);
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
  function findMeetings(userId) {
    return db('meetings')
      .join('users', 'user.id', 'meetings.user_id')
      .where({ user_id: userId });
  }
  function addMeeting(meeting) {
    return db('meetings').insert(meeting)
  }

function removeMeeting(id) {
    return db('meetings')
    .where('id', id)
    .del();
}

function findSteps(userId) {
  return db('steps')
    .join('users', 'user.id', 'steps.user_id')
    .where({ user_id: userId });
}
function addSteps(step) {
  return db('steps').insert(step)
}

function removeSteps(id) {
  return db('steps')
  .where('id', id)
  .del();
}