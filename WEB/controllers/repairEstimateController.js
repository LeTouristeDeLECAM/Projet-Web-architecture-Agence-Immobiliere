// This is the controller for the repairEstimate model

// require
const db = require('../models/index.js');
const RepairEstimate= db.RepairEstimate;


// GET request for list of all RepairEstimate of a ticket.
exports.repairEstimateList = (req, res) => {
    const ticket_Id = req.params.ticket_Id;
    RepairEstimate.findAll({where: {ticket_Id: ticket_Id}})
        .then(data => {
            
            console.log("RepairEstimate found : ", JSON.stringify(data, null, 2));
            res.send(data);
            
            
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving repairEstimate."
            });
        });
};

// Add a new repairEstimate to a ticket
exports.repairEstimateCreate = async function (req, res) {
    const repairEstimate = {
        ticket_Id: req.params.ticket_Id,
        title: req.query.title,
        description: req.query.description,
        price: req.query.price
    };

    await RepairEstimate.create(repairEstimate)
        .then(data => {
            console.log("RepairEstimate created : ", JSON.stringify(data, null, 2));
            res.send(data);
        })
        .catch(err => {
            console.log("Error while creating repairEstimate", err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the repairEstimate."
            });
        });
}

//DELETE a repairEstimate of a ticket
exports.repairEstimateDelete = async function (req, res) {
    
    const estimate_Id = req.params.estimate_Id;
    
    await RepairEstimate.destroy({where: {estimate_Id: estimate_Id}})
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Renter was deleted successfully!"
                });
                console.log("RepairEstimate deleted : ",estimate_Id, "successfully");
            } else {
                res.status(400).send({
                    message: `Cannot delete RepairEstimate with id=${estimate_Id}. Maybe RepairEstimate was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting the repairEstimate."
            });
        });
}
