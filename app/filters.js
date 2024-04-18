module.exports = function (env) { /* eslint-disable-line no-unused-vars */
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {};

  // import moment from 'moment';

  // filters.momento = string => {
  //   return moment(string, 'DD/MM/YYYY', true).format())
  // }

  var dateFilter = require('nunjucks-date-filter');
  filters.dateFull = string => {
    return dateFilter(string, 'dddd, Do MMMM YYYY')
  }

  filters.shortDate = string => {
    return dateFilter(string, 'Do MMMM')
  }

  filters.when = string => {
    return dateFilter(string, 'ddd,Do MMMM hh:mm')
  }




  return filters;
};
