const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const reportSchema = mongoose.Schema(
  {
    'document-uri': {
      type: String,
    },
    referrer: {
      type: String,
    },
    'blocked-uri': {
      type: String,
    },
    'violated-directive': {
      type: String,
    },
    'original-policy': {
      type: String,
    },
    disposition: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
reportSchema.plugin(toJSON);
reportSchema.plugin(paginate);

/**
 * @typedef Report
 */
const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
