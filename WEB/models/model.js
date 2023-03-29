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