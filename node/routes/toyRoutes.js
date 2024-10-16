
const express = require('express');
const { getToys, deleteToy, addToy, updateToy } = require('../controllers/toyController'); // Import controller functions
const router = express.Router();


// GET all toys
router.get('/toys', getToys); // Use the getToys function from the controller

// Add a new toy
router.post('/toys', addToy); // Use the addToy function from the controller

// Delete a toy
router.delete('/toys/:id', deleteToy); // Use the deleteToy function from the controller

router.put('/toys/:id', updateToy);

module.exports = router;