const { Joi } = require('celebrate');

module.exports.triangulationDataValidation = {
  body: Joi.object().keys({
    height: Joi.number().required().min(1).max(30),
    radius: Joi.number().required().min(1).max(30),
    numberOfSegments: Joi.number().required().min(1).max(500),
  }),
};
