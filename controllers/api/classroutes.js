/* eslint-disable indent */
const router = require('express').Router();
const { Goal } = require('../../models');
const withAuth = require('../../utils/auth');
router.post('/', async (req, res) => {
  if (req.session.usertype !== 'tutor') {
    return ('You are Not authorized')
} else { 
  try {
    const newGoal = await Goal.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
}
});
router.get('/profile', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

router.delete('/:id', async (req, res) => {
    // eslint-disable-next-line quotes
    if (req.session.usertype !== "tutor") {
        return ('You are Not authorized')
    } else {
  try {
    const goalData = await courses.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!goalData) {
      res.status(404).json({ message: 'No Goal with this ID!' });
      return;
    }
    res.status(200).json(goalData);
  } catch (err) {
    res.status(500).json(err);
  }
}
});

module.exports = router;