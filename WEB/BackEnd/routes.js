let express = require('express');
let router = express.Router();

// Import controllers
const appartement_controller = require('./controllers/appartement_controller.js');
const renterController = require('./controllers/renterController.js');
const repairEstimateController = require('./controllers/repairEstimateController.js');
const ticketController = require('./controllers/ticketController.js');
//const userController = require('./controllers/userController.js');
//const {User}= require('./models');
const jwt = require('jsonwebtoken');

// create a fonction is authorized
function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        // Here we validate that the JSON Web Token is valid and has been
        jwt.verify(token, "my_secret_key", (err, payload) => {
            if (err) {
                res.status(401).json({error: "Not Authorized"});
                console.log("Not Authorized");
                return;
            }
            req.user = payload; // allow to use the user id the controller
            return next();
        });
    } 
    else { 
        res.status(403).json({error: "Nothing sent in the authorized felid !"});
        console.log("Nothing sent in the authorized felid!");
    }
 }



//------------------ Appartement routes ------------------//

// GET request for list of all Appartement.
router.get('/appartement', appartement_controller.appartementList);
// crate appartement
router.post('/appartement', isAuthorized,appartement_controller.createAppartement); 
// GET request for one Appartement.
router.get('/appartement/:appart_Id', appartement_controller.findAppartementById);
// update appartement
router.put('/appartement/:appart_Id', isAuthorized, appartement_controller.updateAppartement);
// delete appartement
router.delete('/appartement/:appart_Id',isAuthorized,  appartement_controller.deleteAppartement);

//------------------ Renter routes ------------------//
// GET request for a Renter of an appartement.
router.get('/appartement/:appart_Id/renter', renterController.renterList);

// POST request for creating a Renter.
router.post('/appartement/:appart_Id/renter', isAuthorized,renterController.renterAdd);

// PUT request to update the renter of an appartement.
router.put('/appartement/:appart_Id/renter', isAuthorized,renterController.renterUpdate);

// DELETE request to delete the renter of an appartement.
router.delete('/appartement/:appart_Id/renter',isAuthorized, renterController.renterDelete);


//------------------ RepairEstimate routes ------------------//

// GET request for list of all RepairEstimate of a ticket.
router.get('/ticket/:ticket_Id/repair_estimate', repairEstimateController.repairEstimateList);

// POST request for creating a RepairEstimate to a ticket.
router.post('/ticket/:ticket_Id/repair_estimate', isAuthorized,repairEstimateController.repairEstimateCreate);

// DELETE request to delete the RepairEstimate of a ticket.
router.delete('/repair_estimate/:estimate_Id', isAuthorized,repairEstimateController.repairEstimateDelete);


//------------------ Ticket routes ------------------//
// GET request for list of all Ticket of an appartement.
router.get('/appartement/:appart_Id/ticket', ticketController.ticketList);

//POST request for creating a ticket
router.post('/appartement/:appart_Id/ticket', isAuthorized,ticketController.ticketCreate);

// GET request for one Ticket.
router.get('/ticket/:ticket_Id', ticketController.ticketDetail);

//PUT request for updating a ticket
router.put('/ticket/:ticket_Id', isAuthorized,ticketController.ticketUpdate);

// ------------------ Authentification routes ------------------//
// POST 
router.post('/login',async function (req, res, next) {
    
    const jwtKey = "my_secret_key";
    const jwtExpirySeconds = 300;

    let payload = { id: 1};
    let token = jwt.sign(payload, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds
    });
    res.json({"token": token,"maxAge": jwtExpirySeconds * 1000});

    // res.cookie("token", token, { httpOnly: true, secure: true, maxAge: jwtExpirySeconds * 1000 });

});




module.exports = router;