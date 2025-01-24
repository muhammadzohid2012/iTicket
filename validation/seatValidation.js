const Joi = require('joi');

const validateSeat = (seat) =>{
    const schema = Joi.object({
        sector: Joi.number(),
        row_number: Joi.string(),
        number: Joi.string(),
        venue_id: Joi.number(),
        seat_type_id: Joi.number(),
        location_in_schema: Joi.string(),
    });

    return schema.validate(seat);
}

module.exports = { validateSeat } 