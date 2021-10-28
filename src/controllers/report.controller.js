const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { reportService } = require('../services');

const createReport = catchAsync(async (req, res) => {
  const report = await reportService.createReport(req.body['csp-report']);
  res.status(httpStatus.CREATED).send(report);
});

module.exports = {
  createReport,
};
