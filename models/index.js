const User = require('./User');
const courses = require('./courses');
const express = require('express');
const app = express();

User.hasMany(courses, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


courses.hasone(User, {
    foreignKey: 'courses_id',
  });


  app.get('/', (req, res) => {
    console.log('Showing on terminal!');
    res.send('I will be on the browser');
});

app.listen(3000);

module.exports = { User, courses };
