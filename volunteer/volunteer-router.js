const express = require('express');
const Users = require('../users/users-model.js');
const router = express.Router();


router.get('/:id', (req, res) => {
  const { id } = req.params;

  users.findById(id)
  .then(user => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get user' });
  });
});

router.get('/:id/todos', (req, res) => {
  const { id } = req.params;

  Users.findTodos(id)
  .then(todos => {
    if (todos.length) {
      res.json(todos);
    } else {
      res.status(404).json({ message: 'Could not find todos for given user' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get todos' });
  });
});


router.delete('/:id/todos', (req, res) => {
    
  const { id } = req.params;

  Users.findTodos(id)
  .then(user => {
      if(user) {
  Users.removeTodo(id)
  .then(deleted => {
      res.json(deleted);
    });
 } else {
      res.status(404).json({ message: 'Could not find todo with given id' });
    }
  })

  .catch(err => {
    res.status(500).json({ message: 'Failed to delete todo' });
  });
});

router.get('/:id/meetings', (req, res) => {
    const { id } = req.params;
  
    Users.findMeetings(id)
    .then(meetings => {
      if (meetings.length) {
        res.json(meetings);
      } else {
        res.status(404).json({ message: 'Could not find meetings for given user' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get meetings' });
    });
  });

  router.delete('/:id/meetings', (req, res) => {
    const { id } = req.params;

    Users.findMeetings(id)
    .then(user => {
        if(user) {
    Users.removeMeeting(id)
    .then(deleted => {
            res.json(deleted);
          });
       } else {
        res.status(404).json({ message: 'Could not find meeting with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete meeting' });
    });
  });
  

module.exports = router;