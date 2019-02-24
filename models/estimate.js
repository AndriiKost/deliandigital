const mongoose = require('mongoose');

// User Schema
const EstimateSchema = mongoose.Schema({
    name: {
        type: String, 
    },
    email: { 
        type: String,
        required: true
    },
    projectCost: {
        type: String,
        required: true
    },
    projectDuration: {
        type: String,
        required: true
    },
});

const Estimate = module.exports = mongoose.model('Estimate', EstimateSchema);

// const bcrypt = require('bcryptjs');
// const config = require('../config/database');

// const User = module.exports = mongoose.model('User', UserSchema);

// // Add User Estimate
// module.exports.addUser = (newUser, callback) => {
//     newUser.save(callback);
// }

// // Allow to call the find function from the outside of the file
// module.exports.getUserById = function(id, callback){
//     User.findById(id, callback);
// };

// module.exports.getUserByUsername = function(username, callback){
//     const query = {username: username};
//     User.findOne(query, callback);
// };

// // Encrypt password
// module.exports.addUser = function(newUser, callback) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if(err) throw err;
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     });
// }

// // Compare password function
// module.exports.comparePassword = function(candidatePassword, hash, callback){
//     bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//         if(err) throw err;
//         callback(null, isMatch);
//     });
// }