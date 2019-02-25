const express = require('express');
const router = express.Router();

const Estimate = require('../models/estimate');

// Helper function 
const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
};

// Test 
router.get('/test', (req, res, next) => {
  try {
    res.status(200)
    return res.json({"status": "success"})
  } catch(e) {
    next(e)
  }
})

// New post estimate
router.post('/new-estimate', (req, res, next) => {
  try {
    const newEstimate = new Estimate({
      name: req.body.name,
      email: req.body.email,
      projectCost: req.body.projectCost,
      projectDuration: req.body.projectDuration
    })

    newEstimate.save((err) => {
      if (err) {
        console.log(err)
        return next(err)
      }
      console.log(`NEW ESTIMATE HERE => ${newEstimate}`)
      res.status(200)
      return res.send(newEstimate)
    })  
  } catch(e) {
    next(e)
  }
})

// Post estimate
router.get('/estimate/:name/:email/:projectDuration/:projectCost', asyncMiddleware(async (req, res, next) => {
  try {
    let newEstimate = await new Estimate({
      name: req.params.name,
      email: req.params.email,
      projectCost: req.params.projectCost,
      projectDuration: req.params.projectDuration
    })

    console.log(`##########@@@@@@@@@@########## NEW ESTIMATE => ${newEstimate}`)

    await newEstimate.save((err) => {
      if (err) {
          return next(err);
      }
      res.status(200)
      return res.json({"status": "success", "estimate": newEstimate})
    })
  } catch(e) {
    next(e) 
  }

}))

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