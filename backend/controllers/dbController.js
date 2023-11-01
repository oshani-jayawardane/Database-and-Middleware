const DbModel = require('../models/dbModel');
const mongoose = require('mongoose');

// get all dbs
const getDBs = async (req, res) => {
    try{
        const dbs = await DbModel.find({});
        res.status(200).json(dbs);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

// get a specific db
const getDB = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "DB not found" });
    }
    const db = await DbModel.findById(id);
    if (!db) {
        return res.status(400).json({ error: "DB not found" });
    }
    res.status(200).json(db)
    // res.render('update', { db: db });
}

// create a new db
const createDB = async (req, res) => {
    let inputData = { ...req.body };

    const arrayFields = ['secondaryModels', 'dbFlavors', 'ReplicationTools', 'HighAvailability'];

    const excludeFields = ['image', 'supportedDBVersions', 'supportedOSVersions'];

    for (const [key, value] of Object.entries(inputData)) {
        if (typeof value === 'string' && !excludeFields.includes(key)) {
            inputData[key] = capitalizeAndTrim(value);
        }
    }

    for (const field of arrayFields) {
        if (inputData[field]) {
            inputData[field] = inputData[field].split(',').map(str => str.trim());
        }
    }

    // Add doc to database
    try {
        const db = await DbModel.create(inputData);
        res.status(200).json(db)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a db
const deleteDB = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "DB not found" });
    }
    const db = await DbModel.findOneAndDelete({ _id: id });
    if (!db) {
        return res.status(400).json({ error: "DB not found" });
    }
    res.status(200).json({ message: 'Successfully Deleted!' });
}

// update a db
const updateDB = async (req, res) => {
    console.log('Incoming request body:', req.body);  // Debug line

    const { id } = req.params;
    let updateData = { ...req.body };

    const arrayFields = ['secondaryModels', 'dbFlavors', 'ReplicationTools', 'HighAvailability'];
    const excludeFields = ['image', 'supportedDBVersions', 'supportedOSVersions'];

    for (const [key, value] of Object.entries(updateData)) {
        if (typeof value === 'string' && !excludeFields.includes(key)) {
            updateData[key] = capitalizeAndTrim(value);
        }
    }

    console.log('Processed updateData:', updateData);  // Debug line

    for (const field of arrayFields) {
        if (updateData[field] && typeof updateData[field] === 'string') {
            updateData[field] = updateData[field].split(',').map(str => str.trim());
        }
    }    

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "DB not found" });
    }

    const db = await DbModel.findOneAndUpdate({ _id: id }, updateData, { new: true });
    if (!db) {
        return res.status(400).json({ error: "DB not found" });
    }

    console.log('Updated DB:', db);  // Debug line
    res.json({ success: true });
}


// utitlity function for creating a new db
function capitalizeAndTrim(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize the first character but keep the rest
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
}


module.exports = {
    createDB,
    getDBs,
    getDB,
    deleteDB,
    updateDB
}
