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

// {{ 1|lorem }} returns 1 line of lorem ipsum, 2, 3,4 etc
  filters.lorem = string => {
      switch (string) {
        case 1:
        string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        // return string;
        break;

        case 2:
        string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus sed erat eu condimentum."
        return string;
        break;

        case 3:
        string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus sed erat eu condimentum. Sed semper urna eu lorem feugiat accumsan. Quisque feugiat augue nec massa feugiat congue."
        return string;
        break;

        case 4:
        string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus sed erat eu condimentum. Sed semper urna eu lorem feugiat accumsan. Quisque feugiat augue nec massa feugiat congue. Mauris vel velit arcu. Sed ante libero, eleifend eget leo vehicula, cursus pulvinar nisl."
        return string;
        break;
      }
       return string;
    }

  return filters;
};
