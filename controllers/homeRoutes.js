/* eslint-disable no-trailing-spaces */

const router = require('express').Router();
const { Goal, User } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
  try {
    
    const goalData = await Goal.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    


    const goals = goalData.map((goal) => goal.get({ plain: true }));
    

    res.render('homepage', { 
      goals, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/project/:id', async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const goal = goalData.get({ plain: true });
    res.render('project', {
      ...goal,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/profile', withAuth, async (req, res) => {
  try {
    


    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Goal }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  

  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});
module.exports = router;