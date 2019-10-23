const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const restricted = require('../auth/restricted-middleware.js');
const authRouter = require('../auth/auth-router.js');
const adminRouter = require('../admin/admin-router.js');
const volunteerRouter = require('../volunteer/volunteer-router.js');
const checkAdmin = require('../auth/check-admin');
const studentRouter = require('../student/student-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/admin', restricted, checkAdmin ,adminRouter);
server.use('/api/volunteer/', restricted, volunteerRouter);
server.use('/api/student/', studentRouter);



server.get('/api/', (req, res) => {
   
  });
 




  
module.exports = server;
