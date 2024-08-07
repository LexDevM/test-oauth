const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');
require('dotenv').config();

const app = express();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  const user = req.user;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Google Profile Card</title>
      <style>
        .card {
          max-width: 300px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .card img {
          border-radius: 50%;
          margin-bottom: 20px;
        }
        .card h1 {
          font-size: 24px;
          margin: 0;
        }
        .card p {
          font-size: 16px;
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <img src="${user.photos[0].value}" alt="Profile Photo" width="100" height="100">
        <h1>${user.displayName}</h1>
        <p>${user.emails[0].value}</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/logout', (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.send('Goodbye!');
  });
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

app.listen(5000, () => console.log('listening on port: 5000'));
