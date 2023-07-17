const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  airportCodes: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Airport', AirportSchema);

