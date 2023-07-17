const Flight = require('../models/flight')

module.exports = { update }

async function update(req,res){
    const flightToUpdate = await Flight.findById(req.params.id);
    flightToUpdate.destinations.push(req.body);
    try{
        await flightToUpdate.save();
    }
    catch(err){
        console.log(err)
    }
    res.redirect(`/flights/${flightToUpdate._id}`);
  }
  