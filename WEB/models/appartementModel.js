// This model is used to store the appartement information
// the model follows this schema:
// appart_Id	integer($int64)
// title	string
// description	string
// price	integer($int64)
// surface	integer($int64)
// nbRooms	integer($int64)
// address	string
// https://app.swaggerhub.com/apis/LeTouristeDeLECAM/Agence_Immobiliere/1.0#/Appartement


const sequelize = require('sequelize')
const db=require('../db.js')

const Appartement = db.define('appartement', {
    appart_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {type:sequelize.STRING,allowNull:true } ,	
    description: {type:sequelize.STRING,allowNull:true},
    price:{type:sequelize.INTEGER,allowNull:false},
    surface:{type:sequelize.INTEGER,allowNull:false},
    nbRooms:{type:sequelize.INTEGER,allowNull:false},
    address:{type:sequelize.STRING,allowNull:false}
})

module.exports = Appartement