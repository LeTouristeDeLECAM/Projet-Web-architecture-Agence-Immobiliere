require('dotenv').config(); 

const Sequelize = require('sequelize')
const sequelize = new Sequelize({

    database:'real-estate',
    username:'root',
    password:'root',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
}
   
);
module.exports = sequelize