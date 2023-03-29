require('dotenv').config(); 

const Sequelize = require('sequelize')
const sequelize = new Sequelize({

    database:'RealEstate',
    username:'root',
    password:'root',
    dialect: 'mysql',
    host: 'localhost'}
   
);
module.exports = sequelize