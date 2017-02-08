var Sequelize = require('sequelize');

var env;
if (process.env.JAWSDB)
	env = "production";
else {
	env = 'development';
}


var config = require('./config')[env];

var sequelize;
if(config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, {
		host: config.host,
		dialect: config.dialect
	});
}

module.exports = sequelize;