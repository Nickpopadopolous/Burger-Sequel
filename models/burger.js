var Sequelize = require('sequelize');
var connection = require('../config/connection.js');

var Burgers = sequelize.define('burgers', {
	
id: {
	type: Sequelize.INTEGER,
	allowNull: false,
	autoIncrement: true,
	primaryKey: true
},
burger_name: {
	type: Sequelize.STRING(50),
	allowNull: false,
	validate: {
		 is: ["^[a-z]+$",'i'];
	}
},
devoured: {
	type: Sequelize.BOOLEAN,
	defaultValue: false
},
data: {
	type: Sequelize.DATE,
	default: Sequelize.literal('CURRENT_TIMESTAMP')
}
});



var burger = {
	all: function(cb) {
		Burgers.findAll().then(function(res) {
			cb(res);
		});
	},

	create: function(burger_name, cb) {
		Burgers.create({
			burger_name: burger_name,
		}).then(function(data) {
			cb();
		}).catch(function(err) {
			cb(err);
		});
	
	},

	update: function(objColVals, condition, cb) {
		Burgers.update({
			devoured: true;
		},
		{
			where: {id: objColVals}
	}).then(function(data){
		cb();
	}).catch(function(err){

	});
}
};

module.exports = burger;