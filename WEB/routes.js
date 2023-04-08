let express = require('express');
let router = express.Router();

// Import controllers
const appartement_controller = require('./controllers/appartement_controller.js');

// Property Management routes
// GET request for list of all Appartement.
router.get('/appartement', appartement_controller.findAllAppartement);
// crate appartement
router.post('/appartement', appartement_controller.createAppartement); 
// GET request for one Appartement.
router.get('/appartement/:id', appartement_controller.findAppartementById);
// update appartement
router.put('/appartement/:id', appartement_controller.updateAppartement);
// delete appartement
router.delete('/appartement/:id', appartement_controller.deleteAppartement);

module.exports = router;