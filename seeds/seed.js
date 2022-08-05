const sequelize = require('../config/connection');
const { User, courses, tutors } = require('../models');

const userData = require('./userData.json');
const coursesData = require('./coursesData.json');
const tutorsData = require('./tutorsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

    const tutors = await tutors.bulkCreate(tutorsData, {
    individualHooks: true,
    returning: true,
  });
  
  const courses = await courses.bulkCreate(coursesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
