// This is the controller for the user model
//
// require
const db = require('../models/index.js');
const User= db.User;

// GET request for list of all User.
// exports.userList = (req, res) => {
//     User.findAll()
//         .then(data => {
//             res.send(data);
//             console.log("Found users: ", JSON.stringify(data, null, 2));
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving users."
//             });
//         });
// }
