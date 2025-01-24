const { SeatType } = require("../models");
const { validateSeatType } = require("../validation/seat_typeValidation");

exports.createSeatType = async (req, res) => {
  const { error } = validateSeatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seatType = await SeatType.create(req.body);
    res.status(201).send(seatType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatType = async (req, res) => {
  try {
    const seatType = await SeatType.findAll();
    res.status(200).send(seatType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatTypeById = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).send("seatType not found");
    res.status(200).send(seatType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSeatType = async (req, res) => {
  const { error } = validateSeatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await SeatType.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");

    await seat.update(req.body);
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSeatType = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).send("seatType not found");

    const seatTypeData = seatType.toJSON();

    await seatType.destroy();
    res.send({ message: "seat_type deleted successfully" });

    res.status(204).send(seatTypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};