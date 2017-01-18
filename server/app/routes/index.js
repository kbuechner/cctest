var express = require('express');
var router = express.Router();
var User = require('./../models/user-model');

module.exports = router;

//get all users
router.get('/', function(req, res, next){
	User.findAll()
	.then(function(users){
		res.send(users);
	})
	.then(function(){
		res.sendStatus(200)
	})
})

//get one user
router.get('/:id', function(req, res, next){
	User.findById(req.params.id)
		.then(function(user){
			res.send(user);
		})
		.then(function(){
			res.sendStatus(200)
		})
});

//create a user
router.post('/' function (req, res, next)){
	User.create(req.body)
		.then(function(){
			(res.sendStatus(200));
		})
		.catch(next);
});

//update a user
router.put('/:id', function(req, res, next){
	User.findById(req.params.id)
	.then(function(user){
		user.update(req.body)
//		console.log(req.body)
	})
	.then(function(){
		res.send(201);
	})
	.catch(next);
};

//delete a user
router.delete('/:id', function(req, res, next)){
		User.destroy(req.body)
		.then(function(){
			res.sendStatus(204);
		})
		.catch(next);
})