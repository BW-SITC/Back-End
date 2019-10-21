const db = require('../database/dbConfig')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  removeSteps
};

function find() {
  return db('todos');
}

function findById(id) {
  return db('todos')
    .where({ id })
    .first();
}

function findSteps(todoId) {
  return db('steps as st')
    .join('todos as t', 't.id', 'st.todo_id')
    .where({ todo_id: todoId });
}

function add(todo) {
  return db('todos')
    .insert(todo, 'id')
    .then(([id]) => {
      return findById(id);
    });
}
function update(changes, id) {
    return db('todos')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('todos')
      .where('id', id)
      .del();
  }
  function removeSteps(id) {
    return db('steps')
      .where('id', id)
      .del();
  }

