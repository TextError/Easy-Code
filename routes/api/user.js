const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//Input Validation
const validateRegisterInput = require('../../validation/register');

//User Model
const User = require('../../models/User');

// @route   GET api/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      //Check for email if exists in DB
      if (user) {
        errors.email = 'Email allready exists';
        return res.status(400).json(errors);
      } else {
        const newUser  = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
});

module.exports = router;