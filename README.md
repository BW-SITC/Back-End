# Back-End

This is the base url:

https://school-in-cloud.herokuapp.com/api/


---- I have already created an admin and a volunteer ---

-to login as admin:

username: admin,
password: admin

-to login as volunteer,

username: Kevin,
password: pass

-when registering:
 localStorage.setItem('token', res.data.payload);

-when logging in: 
localStorage.setItem('token', res.data.token);


-Login and registration for admin and volunteers

.post('auth/register/admin')

.post('auth/login/admin')

.post('auth/register')

.post('auth/login')

-ADMIN unique endpoints

.post('admin/:id/todos') --- you will need "user_id" and  "instructions" in your post,


.put('admin/:id/todos') --- 
the id is a number matching the id of the todo you want to edit, not the volunteers id .

-Volunteer based endpoints
(ADMIN can access all endpoints)

.get('volunteer/:id/todos')

.delete('volunteer/:id/todos') -- the id is the id of the todo, not the volunteer

.get('volunteer/:id/meetings')

.delete('volunteer/:id/meetings') -- the id is the id of the meeting, not the volunteer.

-Student non restricted endpoints

.get('student/') --- returns array of volunteers

.get('student/:id') --- returns id specific volunteer.

.post('student/:id/meetings') -- requires  "user_id and "meetingTime" .

-when registering a Volunteer:
   {
     username: " ",
     password: " ",
     name: " ",
     days: " ",
     availibleTime: " ",
     country: " "
}
-when posting a todo:
{
  user_id:" ",
  instructions: " "
}
-when posting a meeting:
{
  user_id: " ",
 meetingTime: " "
}
-when updating a todo: 
{
 instructions: " "
}