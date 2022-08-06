const User = require('./User');
const courses = require('./courses');
const user_courses = require('./user_courses');

user_courses.hasMany(courses, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

user_courses.hasMany(User, {
    foreignKey: 'courses_id',
    onDelete: 'CASCADE'
  });

module.exports = { User, courses, user_courses };