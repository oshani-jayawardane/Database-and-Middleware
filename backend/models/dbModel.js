const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    dbModel: { type: String, required: true },
    secondaryModels: { type: [String], required: true },
    vendor: { type: String, required: true },
    dbFlavors: { type: [String], required: true },
    currentLTSRelease: { type: String, required: true },
    supportedDBVersions: { type: String, required: true },
    supportedOSVersions: { type: String, required: true },
    ReplicationTools: { type: [String], required: true },
    HighAvailability: { type: [String], required: true }
});

const DbModel = mongoose.model("Database", dbSchema);

module.exports = DbModel;