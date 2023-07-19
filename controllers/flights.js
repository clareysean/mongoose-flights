const Flight = require('../models/flight')
const Airport = require('../models/airport');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

async function index(req, res) {
    const flights = await Flight.find().sort({ departs: 1 }).lean().exec();
    try{
        res.render("flights/index", { errorMsg: '', flights: flights });
       }
       catch (err) {
        res.render('flights/new', { errorMsg: err.message });
      }
  }

  async function show(req, res) {
    try {
      const codesDoc = await Airport.findOne().lean();
      const allCodes = codesDoc.airportCodes;
  
      const flightToShow = await Flight.findById(req.params.id).exec();
      const tickets = await Ticket.find({flight: flightToShow._id}).exec();
  
      res.render("flights/show", { flight: flightToShow, allCodes, tickets });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }


async function newFlight(req,res){
     const newFlight = new Flight();

     const dt = newFlight.departs;

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


  
  
