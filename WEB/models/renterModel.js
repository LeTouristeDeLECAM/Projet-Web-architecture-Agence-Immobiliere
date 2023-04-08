// This model is used to store the renter information
// the model follows this schema:
// renter_Id	integer($int64)
// firstName	string
// lastName	string
// email	string
// https://app.swaggerhub.com/apis/LeTouristeDeLECAM/Agence_Immobiliere/1.0#/Renter

const sequelize = require('sequelize')
const db=require('../db.js')

const Renter = db.define('renter', {
    renter_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {type:sequelize.STRING,allowNull:true } ,
    lastName: {type:sequelize.STRING,allowNull:true},
    email:{type:sequelize.STRING,allowNull:false}
})

module.exports = Renter
