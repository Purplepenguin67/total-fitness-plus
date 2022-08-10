/* eslint-disable indent */

const User = require('./User');

const Goal = require('./Goal');






user_goals.hasMany(goals, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});



user_goals.hasMany(User, {
    foreignKey: 'courses_id',
    onDelete: 'CASCADE'
  });

module.exports = { User, Goal };

