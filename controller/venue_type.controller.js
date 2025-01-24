const { VenueType } = require("../models");
const { validateVenueType } = require("../validation/venueTypeValidation");

exports.createVenueType = async (req, res) => {
  const { error } = validateVenueType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    
    const venueType = await VenueType.create(req.body);
    res.status(201).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueType = async (req, res) => {
  try {
    const venueType = await VenueType.findAll();
    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueTypeById = async (req, res) => {
  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("VenueType not found");
    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenueType = async (req, res) => {
  const { error } = validateVenueType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("VenueType not found");

    await venueType.update(req.body);
    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenueType = async (req, res) => {
  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("venueType not found");

    const venueTypeData = venueType.toJSON();

    await venueType.destroy();
    res.send({ message: "venue_type deleted successfully" });

    res.status(204).send(venueTypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
