const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

async function newTicket(req, res) {
  const flightId = req.params.id;
  res.render('tickets/new', { flightId });
}

async function create(req, res) {
  try {
    const flightId = req.params.id;
    
    await Ticket.create({ ...req.body, flight: flightId });

    res.redirect(`/flights/${flightId}`);
  } catch (err) {
  }
}
