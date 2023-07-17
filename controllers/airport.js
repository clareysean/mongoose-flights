require("dotenv").config();
require('../config/database.js')
const Airport = require('../models/airport');


const airportCodes = ['YYZ', 'YUL', 'AUS', 'LAX', 'SAN'];

function addCodes(){
    Airport.create({
    airportCodes: airportCodes
})
}

addCodes();