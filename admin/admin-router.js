const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js');

// for endpoints beginning with /api/auth


router.post('/:id/todos', (req, res) => {
    const todoData = req.body;
    const { id } = req.params; 
  
    Users.findById(id)
    .then(user => {
      if (user) {
        Users.addTodo(todoData, id)
        .then(todo => {
          res.status(201).json(todo);
        })
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new todo' });
    });
  });
  router.put('/:id/todos', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Users.findToDoById(id)
    .then(user => {
      if (user) {
        Users.updateTodo(changes, id)
        .then(updatedUser => {
          res.json(updatedUser);
        });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update todo for user' });
    });
  });



module.exports = router;