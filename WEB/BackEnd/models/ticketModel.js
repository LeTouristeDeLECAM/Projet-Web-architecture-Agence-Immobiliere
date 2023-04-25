// This model is used to store the ticket information
// the model follows this schema:
// ticket_Id	integer($int64)
// appart_Id	integer($int64)
//title	string
//description	string
//status	stringEnum:[ NEW, IN_PROGRESS, DONE ]
// https://app.swaggerhub.com/apis/LeTouristeDeLECAM/Agence_Immobiliere/1.0#/Ticket

const sequelize = require('sequelize')
const db=require('../db.js')

const Ticket = db.define('ticket', {
    ticket_Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    appart_Id: {
        type: sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
    },

    title: {type:sequelize.STRING,allowNull:true } ,
    description: {type:sequelize.STRING,allowNull:true},
    status:{type:sequelize.STRING,allowNull:false}
})

module.exports = Ticket