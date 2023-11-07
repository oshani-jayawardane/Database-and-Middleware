const express = require('express');
const { 
    createMW,
    getMWs,
    getMW,
    deleteMW,
    updateMW
} = require('../controllers/mwController');

const router = express.Router();

// Get all middleware in the homepage
router.get('/', getMWs);

// POST a new middleware
router.post('/', createMW);

// DELETE a middleware
router.delete('/:id', deleteMW);

// GET a specific middleware for update page
router.get('/update/:id', getMW);

// UPDATE a middleware
router.patch('/update/:id', updateMW);

module.exports = router;

