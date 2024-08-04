// models/index.js
const { Sequelize } = require('sequelize');
const config = require('../config/database.js');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
 'postgres' ,
  'rahul',
  '',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Disable logging
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models here
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
