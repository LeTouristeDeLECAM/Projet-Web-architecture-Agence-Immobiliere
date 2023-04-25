// This model is used to store the repair estimate information
// the model follows this schema:
// estimate_Id	integer($int64)
// ticket_Id	integer($int64)
// title	string
// description	string
// price	integer($int64)
// https://app.swaggerhub.com/apis/LeTouristeDeLECAM/Agence_Immobiliere/1.0#/repair_estimate

const sequelize = require('sequelize')
const db=require('../db.js')

const RepairEstimate = db.define('repair_estimate', {
    estimate_Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    ticket_Id: {
        type: sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    title: {type:sequelize.STRING,allowNull:true } ,
    description: {type:sequelize.STRING,allowNull:true},
    price:{type:sequelize.INTEGER,allowNull:false}

})

module.exports = RepairEstimate