const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class user_courses extends Model {}

user_courses.init(
  {
    
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },

    courses_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'courses',
          key: 'id',
        },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_courses',
  }
);

module.exports = user_courses;