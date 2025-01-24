const Joi = require('joi');

const validateEventType = (event_type) =>{
    const schema = Joi.object({
        name: Joi.string(),
        parent_event_type_id: Joi.number(),
    });

    return schema.validate(event_type);
}

module.exports = { validateEventType } 