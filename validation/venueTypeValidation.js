const Joi = require('joi');

const validateVenueType = (venue_type) =>{
    const schema = Joi.object({
        name: Joi.string(),
    });

    return schema.validate(venue_type);
}

module.exports = { validateVenueType } 