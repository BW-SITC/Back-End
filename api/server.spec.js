const request = require('supertest');

const server = require('./server.js');

const Users = require('../users/users-model');

const Todos = require('../users/users-model');

const Meetings = require('../users/users-model');

const db = require('../database/dbConfig');

describe('GET /api/student/ POST /api/auth/register POST /api/auth/login', () => {
  
    it('should return 400 http status code', () => {
      return request(server)
        .get('/api/student/')
        .then(response => {
          expect(response.status).toBe(400);
        });
    });
     
    it('should return 404 http status code', () => {
        return request(server)
          .get('/api/auth/login')
          .then(response => {
            expect(response.status).toBe(404);
          });
      });
       
    it('should return 404 http status code', () => {
        return request(server)
          .get('/api/auth/register')
          .then(response => {
            expect(response.status).toBe(404);
          });
      });
  
   
    test('should return JSON', async () => {
      const response = await request(server).get('/api/student/');
  
     
      expect(response.type).toMatch(/json/i);
    });
    test('should return text', async () => {
        const response = await request(server).get('/api/auth/login');
    
       
        expect(response.type).toMatch(/text/i);
      });
      test('should return text', async () => {
        const response = await request(server).get('/api/auth/register');
    
       
        expect(response.type).toMatch(/text/i);
      });
  
    test('should return JSON using .then()', () => {
      return request(server)
        .get('/api/student/')
        .then(response => {
         
          expect(response.type).toMatch(/json/i);
        });
    });
  
    
    it('should return { message: "No token provided" }', async () => {
      const response = await request(server).get('/api/student/');
  
      expect(response.body).toEqual({ message: 'No token provided' });
      expect(response.body.message).toBe('No token provided');
    });
  
    it('toEqual', () => {
      expect({}).toEqual({});
      expect([]).toEqual([]);
      expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
  });

  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
  
  describe('users model', () => {
   
    beforeEach(async () => {
      await db('users').truncate();
    });
   
  
    describe('add()', () => {
      it('should add user to database', async () => {
        // check that table is empty
        const records = await db('users');
        expect(records).toHaveLength(0);
  
        // insert one record
        await Users.add({ username: 'Jane', password:'bleepblork' });
  
        // check we now have one record in the table
        const users = await db('users');
        expect(users).toHaveLength(1);
      });
    });
  
    it('should add the provided user to database ', async () => {
      let user = await Users.add({ username: 'Jane' , password:'bleepblorkblork' });
      expect(user.username).toBe('Jane');
  
      user = await Users.add({ username: 'Jason', password:'bleepblorkbleep' });
      expect(user.username).toBe('Jason');
  
      const users = await db('users');
      expect(users).toHaveLength(2);
  
    });
    it('should remove the provided user from database ', async () => {
      let user = await Users.add({ username: 'Jane', password:'bleepblorkbleeeeepno' });
      expect(user.username).toBe('Jane');
  
       await Users.remove({ id: '1' });
      
  
      const users = await db('users');
      expect(users).toHaveLength(1);
  
    });

    describe('addTodo()', () => {
        it('should add todos to database', async () => {
          // check that table is empty
          const records = await db('todos');
          expect(records).toHaveLength(0);
    
          // insert one record
          await Todos.addTodo({instructions: "test your addTodo!" });
    
          // check we now have one record in the table
          const todos = await db('todos');
          expect(todos).toHaveLength(1);
        });
      });
      it('should remove the provided todo from database ', async () => {
        let todo = await Todos.addTodo({ instructions: "test your addTodo!" });
        expect(todos.instructions).toBe('test your addTodo!');
    
         await Todos.removeTodo({ id: '1' });
        
    
        const todos = await db('todos');
        expect(todos).toHaveLength(0);
    
      });
      describe('addMeeting()', () => {
        it('should add meeting to database', async () => {
          // check that table is empty
          const records = await db('meeting');
          expect(records).toHaveLength(0);
    
          // insert one record
          await Meetings.addMeeting({meetingTime: "Monday at 4pm with John" });
    
          // check we now have one record in the table
          const meetings = await db('meetings');
          expect(meetings).toHaveLength(1);
        });
      });
      it('should remove the provided meetings from database ', async () => {
        let meetings = await meetings.addMeeting({ meetingTime: "Monday at 4pm with John" });
        expect(meetings.meetingTime).toBe("Monday at 4pm with John");
    
         await Meetings.removeMeeting({ id: '1' });
        
    
        const meetings = await db('meetings');
        expect(meetings).toHaveLength(0);
    
      });
  
  });