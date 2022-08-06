const User = require('./User');
const courses = require('./courses');

User.hasMany(courses, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

courses.hasone(User, {
    foreignKey: 'courses_id',
  });

module.exports = { User, courses };