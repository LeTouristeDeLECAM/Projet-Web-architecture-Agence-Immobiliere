const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.appartement = require('./appartementModel.js');
db.renter = require('./renterModel.js');
db.repairEstimate = require('./repairEstimateModel.js');
db.ticket = require('./ticketModel.js');



module.exports = db;
