const router = require('express').Router();
const { Goal } = require('../../models');
const withAuth = require('../../utils/auth');
router.post('/', withAuth, async (req, res) => {
  try {
    // eslint-disable-next-line no-trailing-spaces
    
    // eslint-disable-next-line no-trailing-spaces
    
    const newGoal = await Goal.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});




router.delete('/:id', withAuth, async (req, res) => {
  try {
    const goalData = await Goal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!goalData) {
      res.status(404).json({ message: 'No goal found!' });
      return;
    }
    res.status(200).json(goalData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;