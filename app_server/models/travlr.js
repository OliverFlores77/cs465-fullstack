const mongoose = require('mongoose');

// Define the trip schema
// code and name are indexed so they can be found faster
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

// the collection will be named trips
const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;
