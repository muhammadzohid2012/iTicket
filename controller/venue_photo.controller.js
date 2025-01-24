const { VenuePhoto, Venue } = require("../models");
const { validateVenuePhoto } = require("../validation/venue_photo");

exports.createVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuePhoto = await VenuePhoto.create(req.body);
    res.status(201).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findAll();
    res.status(200).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenuePhotoById = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id, {
      include: [
          {
            model: Venue,
            as: "venuePhoto_venue",
          },
        ]
  });
    if (!venuePhoto) return res.status(404).send("venuePhoto not found");
    res.status(200).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).send("venuePhoto not found");

    await venuePhoto.update(req.body);
    res.status(200).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenuePhoto = async (req, res) => {
    try {
      const venuePhoto = await VenuePhoto.findByPk(req.params.id);
      if (!venuePhoto) return res.status(404).send("venuePhoto not found");
  
      await venuePhoto.destroy();
      res.status(200).send({ message: "venuePhoto deleted successfully" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
