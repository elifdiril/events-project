const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Events", eventSchema);