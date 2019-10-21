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
  updateMeeting,
  findTodos,
  addTodo,
  removeTodo,
  updateTodo,

};

function find() {
  return db('users').select('id', 'name','days','availibleTime','country' );
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
  function addMeeting(meeting, id) {
    return db('meetings').insert(meeting)
    .where({ user_id: id });
  }
  function updateMeeting(changes, id) {
    return db('meetings')
      .where({ id })
      .update(changes);
  }

function removeMeeting(id) {
    return db('meetings')
    .where('id', id)
    .del();
}

function findTodos(userId) {
  return db('todos')
    .join('users', 'user.id', 'todos.user_id')
    .where({ user_id: userId });
}
function addTodo(todo, id) {
  return db('todos').insert(todo)
  .where({ user_id: id });
}
function updateTodo(changes, id) {
  return db('todos')
    .where({ id })
    .update(changes);
}

function removeTodo(id) {
  return db('todos')
  .where('id', id)
  .del();
}