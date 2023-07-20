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
    
    const ticketData = { ...req.body, flight: flightId };
    await Ticket.create(ticketData);
    
    const tickets = await Ticket.find({ flight: flightId }).exec();

    res.redirect(`/flights/${flightId}`);
  } catch (err) {
  }
}
