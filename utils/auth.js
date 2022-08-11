/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const withAuth = (req, res, next) => {

    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  