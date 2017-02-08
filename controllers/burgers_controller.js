var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//Routes for Express

router.get('/', function(req, res){
	res.redirect('/index')
});

router.get('/index', function (req, res) {
	burger.all(function (data) {
		var object = { burgers: data };
		res.render('index', object);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(req.body.burger_name, function (data) {
		res.redirect('/index');
	});
});

router.put('/burgers/update/:id', function (req, res) {

	burger.update(req.params.id, function (data) {
		res.redirect('/index');
	});
});

//Router for server.js

module.exports = router;