const Joi = require('joi');

const createReport = {
  body: Joi.object().keys({
    'csp-report': Joi.object().keys({
      'document-uri': Joi.string(),
      referrer: Joi.string().allow(''),
      'blocked-uri': Joi.string(),
      'violated-directive': Joi.string(),
      'original-policy': Joi.string(),
      disposition: Joi.string(),
    }),
  }),
};

module.exports = {
  createReport,
};
