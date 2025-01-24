const Joi = require('joi');

const validateSector = (sector) => {
    const schema = Joi.object({
        sector_name: Joi.string(),          
    });

    return schema.validate(sector);
}

module.exports = { validateSector };
