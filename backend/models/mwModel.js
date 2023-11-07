const mongoose = require('mongoose');

const mwSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    vendor: { type: String, required: true },
    editions: { type: [String], required: true },
    currentLTSRelease: { type: String, required: true },
    supportedVersions: { type: String, required: true },
    supportedOSVersions: { type: String, required: true },
});

const mwModel = mongoose.model("Middleware", mwSchema);

module.exports = mwModel;