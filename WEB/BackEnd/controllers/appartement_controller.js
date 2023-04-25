// require
const db = require('../models/index.js');
const Appartement= db.Appartement;


// Find all appartements
exports.appartementList = async function (req, res) {
    await Appartement.findAll()
        .then(data => {
            console.log("All appartements : ", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            console.log("Error while retrieving appartements ", err);
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving appartements."
            });
        });
}

// Find a single appartement with an id
exports.findAppartementById = async function (req, res) {
    const id = req.params.appart_Id;

    await Appartement.findByPk(id)
        .then(data => {
            if (data) {
                console.log("Found appartement: ", JSON.stringify(data, null, 2));
                res.json(data);
            } else {
                res.status(404).send({
                    message: `Cannot find appartement with id=${id}. Maybe appartement was not found!`
                });
            }
        })
        .catch(err => {
            console.log("Error while retrieving appartement with id=" + id, err);
            res.status(500).send({
                message: "Error retrieving appartement with id=" + id
            });
        });
}



// Create and Save a new appartement
exports.createAppartement = async function (req, res) {
    // Validate request
    if (!req.query) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
   

    // Create a appartement
    const appartement = {
        title: req.query.title,
        description: req.query.description,
        price: req.query.price,
        surface: req.query.surface,
        nbRooms: req.query.nbRooms,
        address: req.query.address
    };




    // Save appartement in the database
    await Appartement.create(appartement)
        .then(data => {
            console.log("Created appartement: ", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            console.log("Error while creating appartement", err);
            res.status(500).send({
                message: err.message || "Some error occurred while creating the appartement."
            });
        });
}

// Update a appartement by the id in the request
exports.updateAppartement = async function (req, res) {
    const id = req.params.appart_Id;

    await Appartement.update(req.query, {
        where: { appart_id: id }
    })
        .then(data => {
            if (data==1) {
                console.log("Updated appartement with id=" + id);
                res.send({
                    message: "Appartement was updated successfully."
                });
            } else {
                res.status(400).send({
                    message: `Cannot update appartement with id=${id}, not found!`
                });
            }
        })
        .catch(err => {
            console.log("Error while updating appartement with id=" + id, err);
            res.status(500).send({
                message: "Error updating appartement with id=" + id
            });
        });
}

// Delete a appartement by his id
exports.deleteAppartement = async function (req, res) {
    const id = req.params.appart_Id;

    await Appartement.destroy({
        where: { appart_id: id }
    })
        .then(data => {
            if (data) {
                console.log("Deleted appartement with id=" + id);
                res.send({
                    message: "Appartement was deleted successfully!"
                });
            } else {
                res.status(400).send({
                    message: `Cannot delete appartement with id=${id} appartement was not found!`
                });
            }
        })
        .catch(err => {
            console.log("Error while deleting appartement with id=" + id, err);
            res.status(500).send({
                message: "Could not delete appartement with id=" + id
            });
        });
}
