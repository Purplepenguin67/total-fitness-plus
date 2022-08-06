const router = require('express').Router();
const { courses } = require('../../models');

router.get('/register', (req, res) => {
    if (req.session.logged_in !== true) {
        res.redirect('/login');
    } else {
    try {
        const dbcoursesData = await courses.findAll({
            include: [
              {
                model: courses,
                attributes: ['name', 'description', 'date_start', 'date_end'],
              },
            ],
          });
      
          const courses = dbcoursesData.map((courses) =>
            courses.get({ plain: true })
          ); 
    
          //render here
  
    } catch (err) {
      res.status(400).json(err);
    }
}
  });

  router.post('/register', (req, res) => {
    if (req.session.logged_in !== true) {
        res.redirect('/login');
    } else {
    try {
        const user_coursesData = await user_courses.create(req.body);
    res.status(200).json(user_coursesData);
            
          //render here
  
    } catch (err) {
      res.status(400).json(err);
    }
}
  });

  router.delete('/:id', (req, res) => {
    if (req.session.logged_in !== true) {
        res.redirect('/login');
    } else {
    try {
      const user_coursesData = await user_courses.destroy({
        where: {
          courses_id: req.params.id, 
          user_id: req.session.user_id,
        }
      });
      if (!user_coursesData) {
        res.status(404).json({ message: 'No class found in your account!' });
        return;
      }  
      res.status(200).json(user_coursesData);
            
          //render here  
          
    } catch (err) {
      res.status(400).json(err);
    }
}
  });

module.exports = router;