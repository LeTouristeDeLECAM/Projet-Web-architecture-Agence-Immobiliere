let express = require('express');
let router = express.Router();

// Import controllers
const appartement_controller = require('./controllers/appartement_controller.js');
const renterController = require('./controllers/renterController.js');
const repairEstimateController = require('./controllers/repairEstimateController.js');
const ticketController = require('./controllers/ticketController.js');


//------------------ Appartement routes ------------------//

// GET request for list of all Appartement.
router.get('/appartement', appartement_controller.appartementList);
// crate appartement
router.post('/appartement', appartement_controller.createAppartement); 
// GET request for one Appartement.
router.get('/appartement/:appart_Id', appartement_controller.findAppartementById);
// update appartement
router.put('/appartement/:appart_Id', appartement_controller.updateAppartement);
// delete appartement
router.delete('/appartement/:appart_Id', appartement_controller.deleteAppartement);

//------------------ Renter routes ------------------//
// GET request for a Renter of an appartement.
router.get('/appartement/:appart_Id/renter', renterController.renterList);

// POST request for creating a Renter.
router.post('/appartement/:appart_Id/renter', renterController.renterAdd);

// PUT request to update the renter of an appartement.
router.put('/appartement/:appart_Id/renter', renterController.renterUpdate);

// DELETE request to delete the renter of an appartement.
router.delete('/appartement/:appart_Id/renter', renterController.renterDelete);


//------------------ RepairEstimate routes ------------------//

// GET request for list of all RepairEstimate of a ticket.
router.get('/ticket/:ticket_Id/repair_estimate', repairEstimateController.repairEstimateList);

// POST request for creating a RepairEstimate to a ticket.
router.post('/ticket/:ticket_Id/repair_estimate', repairEstimateController.repairEstimateCreate);

// DELETE request to delete the RepairEstimate of a ticket.
router.delete('/repair_estimate/:estimate_Id', repairEstimateController.repairEstimateDelete);


//------------------ Ticket routes ------------------//
// GET request for list of all Ticket of an appartement.
router.get('/appartement/:appart_Id/ticket', ticketController.ticketList);

//POST request for creating a ticket
router.post('/appartement/:appart_Id/ticket', ticketController.ticketCreate);

// GET request for one Ticket.
router.get('/ticket/:ticket_Id', ticketController.ticketDetail);

//PUT request for updating a ticket
router.put('/ticket/:ticket_Id', ticketController.ticketUpdate);




module.exports = router;