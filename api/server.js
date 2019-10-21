const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const adminRouter = require('../admin/admin-router.js');
const volunteerRouter = require('../volunteer/volunteer-router.js');



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/admin', authenticateAdmin, adminRouter);
server.use('/api/volunteer/', authenticateVolunteer, volunteerRouter);
server.use('/api/student/', studentRouter);



server.get('/api/', (req, res) => {
   
  });
 




  
module.exports = server;
