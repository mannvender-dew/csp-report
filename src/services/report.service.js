const httpStatus = require('http-status');
const { Report } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a report
 * @param {Object} userBody
 * @returns {Promise<Report>}
 */
const createReport = async (userBody) => {
  console.log('------', userBody);
  return Report.create(userBody);
};

module.exports = {
  createReport,
};
