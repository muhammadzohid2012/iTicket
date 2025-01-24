const { Venue, VenueType, Region, Distract } = require("../models");
const { validateVenue } = require("../validation/venueValidation");

exports.createVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue.create(req.body);
    res.status(201).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenue = async (req, res) => {
  try {
    const venue = await Venue.findAll();
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id, {
      include: [
          {
            model: VenueType,
            as: "venue_venue_type",
          },
          {
            model: Region,
            as: "venue_region",
          },
          {
            model: Distract,
            as: "venue_district",
          },
        ],
  });
    if (!venue) return res.status(404).send("venue not found");
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("venue not found");

    await venue.update(req.body);
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.deleteVenue = async (req, res) => {
    try {
      const venue = await Venue.findByPk(req.params.id);
      if (!venue) return res.status(404).send("venue not found");
  
      await venue.destroy();
      res.status(200).send({ message: "venue deleted successfully" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
