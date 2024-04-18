var moment = require('moment-timezone');
module.exports = function (env) { /* eslint-disable-line no-unused-vars */
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {};

  filters.formatDate = string => {
    return moment(string).tz('GMT').format('YYYY MMMM DD, dddd, HH:MM:SS z');
  }

  return filters;
};
