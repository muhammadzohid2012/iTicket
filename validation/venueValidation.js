const Joi = require('joi');

const validateVenue = (venue) =>{
    const schema = Joi.object({
        name: Joi.string(),
        address: Joi.string(),
        location: Joi.string(),
        site: Joi.string(),
        phone: Joi.string(),
        venue_type_id: Joi.number(),
        schema: Joi.string(),
        region_id: Joi.number(),
        district_id: Joi.number(),

    });

    return schema.validate(venue);
}

module.exports = { validateVenue } 