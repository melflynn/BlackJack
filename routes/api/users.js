const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

router.post('/signup', (req, res) => {
  console.log(req);
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({email: "There is already an account associated with that email"})
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

module.exports = router;