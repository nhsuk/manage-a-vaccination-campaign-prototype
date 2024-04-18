import { DateTime } from 'luxon'
const { DateTime } = require("luxon");

export default (_env) => {
  const filters = {}

  /**
   * Add your methods to the filters object below this comment block.
   *
   * @example
   * filters.sayHello = function (name) {
   *   return `Hello, ${name}!`
   * }
   *
   * Which in your templates would be used as:
   *
   * {{ "World" | sayHello }} => Hello, World!
   *
   * @see {@link https://mozilla.github.io/nunjucks/api#custom-filters}
   */

  /**
   * Get age from date
   * @param {object<Date>} date
   * @returns {number} Age in years
   */

  

  /**
   * Format date with day of the week
   * @param {string} string - ISO date, for example 07-12-2021
   * @returns {string} Formatted date, for example Sunday 7 December 2021
   */
  filters.dateWithDayOfWeek = string => {
    return DateTime.fromISO(string).toFormat('EEEE d MMMM yyyy')
  }

  /**
   * Format date
   * @param {string} string - ISO 8601 date
   * @param {string} tokens - Formatting token
   * @returns {string} Formatted date
   */
  filters.formatDate = (string, tokens) => {
    const date = DateTime.fromISO(string)

    return date.toFormat(tokens)
  }


  return filters
}
