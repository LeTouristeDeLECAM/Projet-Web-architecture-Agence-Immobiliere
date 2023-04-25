// This is à model of user to connect to the API
const sequelize = require('sequelize')
const db=require('../db.js')

const User = db.define('user', {
    user_Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {type:sequelize.STRING,allowNull:false } 
})

module.exports = User