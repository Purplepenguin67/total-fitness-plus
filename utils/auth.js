const withAuth = (req, res, next) => {
  
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;


/* eslint-disable indent */
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
app.use(express.json());
const users = [];
app.get('/users', (req, res) => {
    res.json(users);
});
app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // console.log(salt);
        // console.log(hashedPassword);
        const user = { name: req.body.name, password: hashedPassword };
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name);
    if (user === null) {
        return res.status(400).send('User Invalid');
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('User logged in');
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send();
    }
});
app.listen(3000);