// require
const db = require('../models/model.js');
const Appartement= db.Appartement;

Appartement.findAll({attributes: ['appart_id', 'title', 'description', 'price', 'surface', 'nbRooms', 'address']}).then(data => {
    console.log(data.toJSON());
    res.json(data);
})
.catch(err => {
    res.status(500).json({ 
        message: err.message});
    });
     
    