const Joi = require('joi');

const validateSeatType = (seat_type) =>{
    const schema = Joi.object({
        name: Joi.string(),
    });

    return schema.validate(seat_type);
}

module.exports = { validateSeatType } 