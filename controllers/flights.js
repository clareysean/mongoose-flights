const Flight = require('../models/flight')
const Airport = require('../models/airport');
module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index(req, res) {
    const flights = await Flight.find().sort({ departs: 1 }).exec();
    try{
        res.render("flights/index", { errorMsg: '', flights: flights });
       }
       catch (err) {
        res.render('flights/new', { errorMsg: err.message });
      }
  }
  

async function newFlight(req,res){
     const newFlight = new Flight();
// Obtain the default date
     const dt = newFlight.departs;
// Format the date for the value attribute of the input
     let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
     departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;

     res.render('flights/new', { errorMsg:"", departsDate });
}

async function create(req, res) {
    try {
      await Flight.create(req.body);
      res.redirect("/flights");
    } catch (err) {
      res.render("flights/new", { errorMsg: err.message });
    }
  }

  async function show(req, res){
    const flightToShow = await Flight.findById(req.params.id);
    const codesDoc = await Airport.findOne();
    const allCodes = codesDoc.airportCodes;
    res.render("flights/show", { flight: flightToShow, allCodes })
  }
  
