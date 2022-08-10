const sequelize = require('../config/connection');
const { User, courses, user_courses } = require('../models');

const userData = require('./userData.json');
const coursesData = require('./coursesData.json');
const user_coursesData = require('./user_coursesData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
    const courses = await courses.bulkCreate(coursesData, {
    individualHooks: true,
    returning: true,
  });

    const user_courses = await user_courses.bulkCreate(user_coursesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
