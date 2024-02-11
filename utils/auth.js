const withAuth = (req, res, next) => {
  // If  user not loggedIn, send  request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
