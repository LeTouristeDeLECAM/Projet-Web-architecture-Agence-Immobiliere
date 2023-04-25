//------------------------------------------------------
const hostname = '127.0.0.1';
const port = 3000;
// Import express 
let express = require('express');

// Initialize the app 
let app = express();

app.use(express.json());
require('dotenv').config();

//
let cors = require('cors');
app.use(cors());

// Importing the database model
const Sequelize = require('sequelize');
const db = require('./db.js');

// Creating all the tables defined in agency
//db.sync()
db.sync({alter: true})

let router = require('./routes.js');
app.use("/", router);

// Manage bad route
app.use(function (req, res, next) {
    res.status(404).json({"error": "path not found"});
});

 // Launch app to listen to specified port
 app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });