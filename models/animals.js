const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isEndangered: {
        type: Boolean,
        default: false
    },
    dateOfEntry: {
        type:Date,
        default: Date.now()
    }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;