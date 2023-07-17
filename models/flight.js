const mongoose = require('mongoose');
const Schema = mongoose.Schema

const destinationSchema = new Schema({
  airport: { 
    type: String,
    enum: ['YYZ', 'YUL', 'AUS', 'LAX', 'SAN']
  },
  arrival: {type: Date}
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Air Canada', 'Delta', 'Ryan Air', 'United', 'Southwest']
      },
    airport: {
      type: String,
      enum: ['YYZ', 'YUL', 'AUS', 'LAX', 'SAN'],
      default: 'YYZ'
    },
    destinations: [destinationSchema],
    flightNumber: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
    },
    departs: {
      type: Date,
      default: () => {return new Date().toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
      }
    }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model("Flight", flightSchema);