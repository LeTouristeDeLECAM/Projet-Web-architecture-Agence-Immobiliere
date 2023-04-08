// require
const db = require('../models/index.js');
const Appartement= db.Appartement;


// find all appartements
exports.findAllAppartement = async function(req, res) {
    await Appartement.findAll()//{attributes: ['appart_id', 'title', 'description', 'price', 'surface', 'nbRooms', 'address']}
    .then(data => {
        
        console.log("All appartement:", JSON.stringify(data, null, 2));
        res.json(data);
        // console.log(data.toJSON());
        // res.json(data);
    })
    .catch(err => {
    res.status(500).json({ message: err.message});
    });
};


// find appartement by id

// Appartement.findById({where: {appart_id: req.params.id}})
// .then(data => {
//     console.log(data.toJSON());
//     res.json(data);
// })
// .catch(err => { 
//     res.status(500).json({
//         message: err.message});
//     });


exports.findAppartementById = async function(req, res) {
    const {Op}= require('sequelize');
    await Appartement.findAll({where: {appart_id: {[Op.gt]: 1}}}).then(data => { 
        console.log(data.toJSON());
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({ message: err.message});
        });

};

// find appartement by price
exports.findAppartementByPrice = async function(req, res) {
    await Appartement.findByPrice({order: ['price']})
    .then(data => {
        console.log(data.toJSON());
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({ message: err.message});
        });
};

// create non persistant object
exports.createAppartement = async function(req, res) {
    let appartement = Appartement.build({ title: req.body.title, description: req.body.description, price: req.body.price, surface: req.body.surface, nbRooms: req.body.nbRooms, address: req.body.address });
    // save object in database
    await appartement.save()
    .then(data => {
        console.log(data.toJSON());
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({ 
            message: err.message});
        });
};


// update object in database
exports.updateAppartement = async function(req, res) {
    await Appartement.update({ title: req.body.title, description: req.body.description, price: req.body.price, surface: req.body.surface, nbRooms: req.body.nbRooms, address: req.body.address }, 
        { where: { appart_id: req.params.id } })
        .then(data => {
            console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ 
            message: err.message});
            });
};

// delete object in database
exports.deleteAppartement = async function(req, res) {

    await Appartement.destroy({ where: { appart_id: req.params.id } })
        .then(data => {
            console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ 
                message: err.message});
            });
};
