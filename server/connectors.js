/*
 * \file connector.js
 * \brief  Connection to postgres Database with Sequelize
 * \date 16 juin 2017
 * \author Cuistot du coin
 */

// Import of dependency
const Sequelize = require('sequelize');
// -------------------- //

// Connection to the Database Postgres with Sequelize
const db = new Sequelize(
  'cuistot',  // Database name
  'jeremy',   // User
  'dev',      // Password
  {
    host: 'localhost',  // Database host
    dialect: 'postgres', // Database type
  }
);
// ------------------------ //

// Check if the connection as succeeded (for Debug only)
  // db
  //   .authenticate()
  //   .then(() => {
  //     console.log('Connection has been established successfully.');
  //   })
  //   .catch((err) => {
  //     console.error('Unable to connect to the database:', err);
  //   });
// --------------------------- //

// Export module database
module.exports = db;
