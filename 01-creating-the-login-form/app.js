const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)


const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://lucas:lucas7796@clusterlucas.fbomq.azure.mongodb.net/ClusterLucas'
const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'session'
})

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store
  }))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

console.log('foiiiii')

    // app.listen(3001);


mongoose
  .connect(
    MONGODB_URI
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'lucas',
          email: 'lucas.pineda@hotmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3001);
    console.log('conectouu')

  })
  .catch(err => {
    console.log(err);
    console.log('errorrr')
  });