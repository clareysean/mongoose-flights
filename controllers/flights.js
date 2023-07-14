const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create
}

async function index(req, res) {
    const flights = await Flight.find().sort({ departs: 1 }).exec();
    console.log(flights);
    try{
        res.render("flights/index", { errorMsg: '', flights: flights });
       }
       catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
      }
  }
  

function newFlight(req,res){
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
      console.log(req.body)
      res.redirect("/flights");
    } catch (err) {
      console.log(err);
      res.render("flights/new", { errorMsg: err.message });
    }
  }
  
  
  