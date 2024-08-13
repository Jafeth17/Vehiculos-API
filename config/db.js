const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vehiculos', 'root', 'MySQLServer.', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
