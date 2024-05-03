module.exports = function (env) { /* eslint-disable-line no-unused-vars */
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {};
  var moment = require('moment'); // require
  // moment().format();

  filters.formatDate = string => {
    return moment(string).format("ddd DD MMM YYYY");
  }



  filters.lastUpdated = string => {
    return moment().format("dddd DD MMMM YYYY");
  }


  return filters;
};
