const express = require('express');
const router = express.Router();

const Estimate = require('../models/estimate');

// Test 
router.get('/test', (req, res, next) => {
  if (err) {
    return next(err);
  }
  res.status(200)
  res.send('Hello from test API')
})

// Post estimate
router.get('/estimate/:name/:email/:projectDuration/:projectCost', (req, res, next) => {

  if (!req.params) {
    res.status(400)
    res.send('Something went wrong. Server didn\'t receive estimate details. ')
    return
  }
  let newEstimate = new Estimate({
    name: req.params.name,
    email: req.params.email,
    projectCost: req.params.projectCost,
    projectDuration: req.params.projectDuration
  })

  console.log(`##########@@@@@@@@@@########## NEW ESTIMATE => ${newEstimate}`)
  newEstimate.save((err) => {
    if (err) {
        return next(err);
    }
    res.status(200)
    res.send('Estimate was created successfully!')
  })
})

// Handle Contact Form
router.post('/contact', (req, res, next) => {

})

module.exports = router;

// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const config = require('../config/database');

// // Register
// router.post('/register', (req, res, next) => {
//   let newUser = new User({
//     name: req.body.name,
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password
//   });

//   User.addUser(newUser, (err, user) => {
//     if(err){
//       res.json({success: false, msg:'Failed to register user'});
//     } else {
//       res.json({success: true, msg:'User registered'});
//     }
//   });
// });

// // Authenticate
// router.post('/authenticate', (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   User.getUserByUsername(username, (err, user) => {
//     if(err) throw err;
//     if(!user){
//       return res.json({success: false, msg: 'User not found'});
//     }

//     User.comparePassword(password, user.password, (err, isMatch) => {
//       if(err) throw err;
//       if(isMatch){
//         const token = jwt.sign({data: user}, config.secret, {
//           expiresIn: 604800 // 1 week
//         });

//         res.json({
//           success: true,
//           token: `Bearer ${token}`,
//           user: {
//             id: user._id,
//             name: user.name,
//             username: user.username,
//             email: user.email
//           }
//         });
//       } else {
//         return res.json({success: false, msg: 'Wrong password'});
//       }
//     });
//   });
// });

// // Profile
// router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({user: req.user});
// });