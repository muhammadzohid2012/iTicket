const Joi = require('joi');

const validateVenuePhoto = (venue_photo) =>{
    const schema = Joi.object({
        venue_id: Joi.number(),
        url: Joi.string()
    });

    return schema.validate(venue_photo);
}

module.exports = { validateVenuePhoto } 