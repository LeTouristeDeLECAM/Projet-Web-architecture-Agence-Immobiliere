const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.Appartement = require('./appartementModel.js');
db.Renter = require('./renterModel.js');
db.RepairEstimate = require('./repairEstimateModel.js');
db.Ticket = require('./ticketModel.js');
db.User = require('./userModel.js');

// models associations
//ticket-appartement
db.Appartement.hasMany(db.Ticket, {foreignKey: 'appart_Id', sourceKey: 'appart_Id'});
db.Ticket.belongsTo(db.Appartement, {foreignKey: 'appart_Id', targetKey: 'appart_Id'});
//appartement-renter
db.Appartement.hasOne(db.Renter, {foreignKey: 'appart_Id', sourceKey: 'appart_Id'});
db.Renter.belongsTo(db.Appartement, {foreignKey: 'appart_Id', targetKey: 'appart_Id'});
//repairEstimate-ticket
db.RepairEstimate.hasMany(db.Ticket, {foreignKey: 'ticket_Id', sourceKey: 'ticket_Id'});
db.Ticket.belongsTo(db.RepairEstimate, {foreignKey: 'ticket_Id', targetKey: 'ticket_Id'});


module.exports = db;
