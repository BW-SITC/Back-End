const express = require('express');
const Users = require('../users/users-model.js');
const router = express.Router();



router.get('/', (req, res) => {
    Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get users' });
    });
  });

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
  router.post('/:id/meetings', (req, res) => {
    const meetingData = req.body;
    const { id } = req.params; 
  
    Users.findById(id)
    .then(user => {
      if (user) {
        Users.addMeeting(meetingData, id)
        .then(meeting => {
          res.status(201).json(meeting);
        })
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new meeting' });
    });
  });



module.exports = router;