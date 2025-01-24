const { Distract, Region } = require("../models");
const { validateDistract } = require("../validation/distractValidation");

exports.createDistract = async (req, res) => {
  const { error } = validateDistract(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const distract = await Distract.create(req.body);
    res.status(201).send(distract);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistract = async (req, res) => {
  try {
    const distract = await Distract.findAll();
    res.status(200).send(distract);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistractById = async (req, res) => {
  try {
    const distract = await Distract.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "district_region",
        },
      ],
    });
    if (!distract) return res.status(404).send("distract not found");
    res.status(200).send(distract);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDistract = async (req, res) => {
  const { error } = validateDistract(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const distract = await Distract.findByPk(req.params.id);
    if (!distract) return res.status(404).send("distract not found");

    await distract.update(req.body);
    res.status(200).send(distract);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDistract = async (req, res) => {
  try {
    const distract = await Distract.findByPk(req.params.id);
    if (!distract) return res.status(404).send("distract not found");

    await distract.destroy();
    res.status(204).send({ message: "distract deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
