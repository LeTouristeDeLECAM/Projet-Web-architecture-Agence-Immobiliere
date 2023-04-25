// This is the controller for the renter model

// require
const db = require('../models/index.js');
const Renter= db.Renter;

// GET request for the renter of an appartement

exports.renterList = async function (req, res)  {
    const appart_Id = req.params.appart_Id;
    await Renter.findAll({
        where: {
            appart_Id: appart_Id
        }
    })
    .then(num => {
        if (num.length > 0){
            console.log("Retrieved renter of appartement with id=" + appart_Id);
            res.send(num);

        } else {
            res.status(404).send({
                message: `Cannot find renter with appart_Id=${appart_Id}.`
            });
        }
        
       
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving renters."
        });
    });
};


// Add a renter to an appartement

exports.renterAdd = async function (req, res) {

    // console.log("req.query: ", req.query);
    // console.log("req.params: ", req.params);
    // console.log("req.params.appart_Id: ", req.params.appart_Id);


    // Create a renter
    const renter = {
        appart_Id: req.params.appart_Id,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        email: req.query.email
    };

    // Save renter in the database
    await Renter.create(renter)
        .then(data => {
            console.log("Created renter: ", JSON.stringify(data, null, 2));
            res.send(data);
        })
        .catch(err => {
            console.log("Error while creating renter", err);
            res.status(500).send({   
                message:
                    err.message || "Some error occurred while creating the renter."
            });
        });

}



// Update a renter of an appartement
exports.renterUpdate = async function (req, res) {
    const appart_Id = req.params.appart_Id;
    const renter= {
        appart_Id: req.query.appart_Id,
        email: req.query.email,
    };

    await Renter.update(renter, {
        where: { appart_Id: req.params.appart_Id}
    })
        .then(num => {
            if (num ) {
                console.log("Updated renter ");
                res.send({
                message: "Renter was updated successfully."
            });
        } else {
            res.status(400).send({
                message: `Cannot update Renter with appart_Id=${appart_Id}. appart id not found!`
            });
        }
          
        })
        .catch(err => {
            res.status(500).send( 
                console.log('Error while updating the renter', err),
                {
                message: 
                    err.message || "Some error occurred while Updating the renter."
            });
        });
}


// Delete a renter of an appartement // il y a des soucis avec cette fonction elle passe par l'appartement et non par le locataire

exports.renterDelete = (req, res) => {
    const appart_Id = req.params.appart_Id;

    Renter.destroy({
        where: { appart_Id: appart_Id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Renter was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Renter with appart_Id=${appart_Id}. Maybe Renter was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Renter with id=" + appart_Id
            });
        });
};



