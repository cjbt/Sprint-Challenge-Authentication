const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticate } = require('../auth/authenticate');
const db = require('../database/dbConfig');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(422).json({ message: 'Missing username and password fields' });
  } else {
    const hash = bcrypt.hashSync(password, 10);
    db('users')
      .insert({ username, password: hash })
      .then(user => {
        res.json({ message: `You have registered, ${username}!` });
      })
      .catch(err => res.status(500).json(err));
  }
}

function login(req, res) {
  // implement user login
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(422).json({ message: 'Missing username and password fields' });
  } else {
    db('users')
      .where({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: `30 days`
          });
          res.json({ message: `Welcome ${username}`, token });
        } else {
          res.status(401).json({ messag: 'Invalid Credentials' });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' }
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
