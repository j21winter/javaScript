const User = require('../models/user.model');

//! A method to find all users from the db. 
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allDaUsers) => {
            res.json({ users: allDaUsers })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

//! A method to return just one user usign their unique id
module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            res.json({ user: oneSingleUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

//! A method to create a new user by sending the info from the request 
//! using the create keyword to build a new user. 
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => {
            res.json({ user: newlyCreatedUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    }
 

//! A method to update existing user, finding using the unique id 
//! and sending in the new info in the request body. 
module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({ user: updatedUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

//! Delete user by searching the id in the request params. 
module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

