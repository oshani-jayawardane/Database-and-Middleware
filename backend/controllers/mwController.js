const MWModel = require('../models/mwModel');
const mongoose = require('mongoose');

// get all mws
const getMWs = async (req, res) => {
    try{
        const mws = await MWModel.find({});
        res.status(200).json(mws);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

// get a specific mw
const getMW = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "MW not found" });
    }
    const mw = await MWModel.findById(id);
    if (!mw) {
        return res.status(400).json({ error: "MW not found" });
    }
    res.status(200).json(mw)
    // res.render('update', { db: db });
}

// create a new mw
const createMW = async (req, res) => {
    let inputData = { ...req.body };

    const arrayFields = ['editions'];
    const excludeFields = ['image', 'supportedVersions', 'supportedOSVersions'];

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
        const mw = await MWModel.create(inputData);
        res.status(200).json(mw)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a mw
const deleteMW = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "DB not found" });
    }
    const mw = await MWModel.findOneAndDelete({ _id: id });
    if (!mw) {
        return res.status(400).json({ error: "DB not found" });
    }
    res.status(200).json({ message: 'Successfully Deleted!' });
}

// update a db
const updateMW = async (req, res) => {
    console.log('Incoming request body:', req.body);  // Debug line

    const { id } = req.params;
    let updateData = { ...req.body };

    const arrayFields = ['editions'];
    const excludeFields = ['image', 'supportedVersions', 'supportedOSVersions'];

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
        return res.status(404).json({ error: "MW not found" });
    }

    const mw = await MWModel.findOneAndUpdate({ _id: id }, updateData, { new: true });
    if (!mw) {
        return res.status(400).json({ error: "MW not found" });
    }

    console.log('Updated MW:', mw);  // Debug line
    res.json({ success: true });
}


// utitlity function
function capitalizeAndTrim(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize the first character but keep the rest
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
}


module.exports = {
    createMW,
    getMWs,
    getMW,
    deleteMW,
    updateMW
}
