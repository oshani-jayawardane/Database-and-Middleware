const express = require('express');
const { 
    createDB, 
    getDBs, 
    getDB, 
    deleteDB, 
    updateDB 
} = require('../controllers/dbController');

const router = express.Router();

// Get all databases in the homepage
router.get('/', getDBs);

// POST a new database
router.post('/', createDB);

// DELETE a database
router.delete('/:id', deleteDB);

// GET a specific database for update page
router.get('/update/:id', getDB);

// UPDATE a database
router.patch('/update/:id', updateDB);

module.exports = router;

