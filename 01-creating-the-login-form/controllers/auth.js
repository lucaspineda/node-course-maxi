const User = require('./../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split('loggedIn=')[1];

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('631e9da87667d647ee8c32c0')
  .then(user => {
    req.session.user = user;
    req.session.isLoggedIn = true
    res.redirect('/');
    console.log(user)
  })
  .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect('/')
  })
};