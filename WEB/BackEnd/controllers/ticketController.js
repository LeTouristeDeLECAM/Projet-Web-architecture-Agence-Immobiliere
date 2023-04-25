// This is the controller for the ticket model

// require
const db = require('../models/index.js');
const Ticket= db.Ticket;

// GET request for list of all Ticket for an appartement.
exports.ticketList = (req, res) => { 
    Ticket.findAll(

        {
        where: {
            appart_Id: req.params.appart_Id
        }
    }
    )
    .then(data => {
       
        res.send(data);
        console.log("Found tickets: ", JSON.stringify(data, null, 2));
       
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tickets."
        });
    });
};


// get ticket by id
exports.ticketDetail = async function (req, res) {
    const ticket_Id = req.params.ticket_Id;
    await Ticket.findByPk(ticket_Id)
        .then(data => {
            if (data) {
                console.log("Found ticket: ", JSON.stringify(data, null, 2));
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find ticket with id=${ticket_Id}. Maybe ticket ticket_Id doesn't exist !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ticket."
            });
        });
};





//POST request for creating a ticket dedicated to an appartement.
exports.ticketCreate = async function (req, res) {

    // Validate request
    if (!req.query) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // console.log("req.query: ", req.query);
    // console.log("req.params: ", req.params);



    // Create a ticket
    const ticket = {
        appart_Id: req.params.appart_Id,
        title: req.query.title,
        description: req.query.description,
        status: req.query.status
    };

    // Save ticket in the database


    await Ticket.create(ticket)
        .then(data => {
            res.send(data);
            console.log("Created ticket: ", JSON.stringify(data, null, 2));
        })
        .catch(err => {
            console.log("Error while creating ticket", err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the ticket."
            });
        });
};

// UPDATE request for updating a ticket dedicated to an appartement.
exports.ticketUpdate = async function (req, res) {

    const ticket_Id = req.params.ticket_Id;

    await Ticket.findByPk(ticket_Id)
        .then(data => {
            if (data) {
                data.update(req.query)
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while updating the ticket."
                        });
                    });
            } else {
                res.status(404).send({
                    message: `Cannot find ticket with id=${ticket_Id}. Maybe ticket was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving ticket with id=" + ticket_Id + " " + err
            });
        }
    );
};



