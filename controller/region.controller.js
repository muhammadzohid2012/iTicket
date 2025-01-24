const { Region } = require("../models");
const { validateRegion } = require("../validation/regionValidation");
exports.createRegion = async (req, res) => {
  const { error } = validateRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const createRegion = await Region.create(req.body);
    res.send(createRegion);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getRegion = async (req, res) => {
  try {
    const regionAll = await Region.findAll();
    res.send(regionAll);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.getRegionById = async (req, res) => {
  try {
    const region_id = await Region.findByPk(req.params.id);
    if (!region_id) return res.status(404).send("region not found");
    res.send(region_id);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.updateRegion = async (req, res) => {
    const { error } = validateRegion(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    try {
      const region = await Region.findByPk(req.params.id);
      if (!region) return res.status(404).send("region not found");
  
      await region.update(req.body);
      res.status(200).send(region);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

exports.deleteRegion = async (req, res) => {
  try {
    const delRegion = await Region.findByPk(req.params.id);
    if (!delRegion) return res.status(404).send("region not found");
    await delRegion.destroy();
    res.send({ message: "region deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};
