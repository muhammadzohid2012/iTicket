const Joi = require("joi");

const validateDiscount = (discount) => {
  const schema = Joi.object({
    discount: Joi.string(),
    finish_date: Joi.string(),
  });

  return schema.validate(discount);
};

module.exports = { validateDiscount };
