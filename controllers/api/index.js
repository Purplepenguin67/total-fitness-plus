const router = require('express').Router();
const userRoutes = require('./userRoutes');

const coursesRoutes = require('./coursesRoutes');
const registerRoutes = require('./registerRoutes');

router.use('/users', userRoutes);
router.use('/courses', coursesRoutes);
router.use('/register', registerRoutes);

module.exports = router;
