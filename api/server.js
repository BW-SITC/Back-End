const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const adminRouter = require('../admin/admin-router.js');
const volunteerRouter = require('../volunteer/volunteer-router.js');
const studentRouter = require('../student/student-router.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/admin/', authenticateAdmin, adminRouter);
server.use('/api/volunteer/', authenticateVolunteer, volunteerRouter);
server.use('/api/student/', authenticateStudent, studentRouter);


server.get('/api/admin/', (req, res) => {
   
  });
  server.get('/api/volunteer/', (req, res) => {
   
});
server.get('/api/student/', (req, res) => {
   
});
  server.post('/api/admin/', (req, res) => {
   
  });
  server.put('/api/admin/', (req, res) => {
   
});
server.delete('/api/admin/', (req, res) => {
   
});
server.delete('/api/volunteer/', (req, res) => {
   
});
server.post('/api/student/', (req, res) => {
   
});




  
module.exports = server;
