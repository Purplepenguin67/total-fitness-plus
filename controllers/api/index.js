const router = require('express').Router();
const userRoutes = require('./userRoutes');
const coursesRoutes = require('./coursesRoutes');
const tutorsRoutes = require('./tutorsRoutes');

router.use('/users', userRoutes);
router.use('/courses', coursesRoutes);
router.use('/tutors', tutorsRoutes);

module.exports = router;
