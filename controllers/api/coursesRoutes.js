const router = require('express').Router();
const { courses } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const courses = await courses.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newcourses);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
    if (req.session.usertype !== "tutor") {
        return ('You are Not authorized')
    }
  try {
    const coursesData = await courses.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!coursesData) {
      res.status(404).json({ message: 'No courses found with this id!' });
      return;
    }

    res.status(200).json(coursesData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
