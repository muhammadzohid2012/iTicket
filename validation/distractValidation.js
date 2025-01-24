const Joi = require("joi");

const validateDistract = (distract) => {
  const schema = Joi.object({
    name: Joi.string(),
    region_id: Joi.number(),
  });

  return schema.validate(distract);
};

module.exports = { validateDistract };
