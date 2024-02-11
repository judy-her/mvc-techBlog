const path = require('path');
const express = require('express');
//session management
const session = require('express-session');
//template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
//controller routes
const routes = require('./controllers');
//utility functions
const helpers = require('./utils/helpers');
const crypto = require('crypto');

//db connection
const sequelize = require('./config/connection');
//Session store with Sequelize integration
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const secretCrypto = crypto.randomBytes(12).toString('hex');

const sess = {
  secret: secretCrypto,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, //1 day
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
console.log(secretCrypto);

app.use(session(sess));

//set handlebars.js
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
