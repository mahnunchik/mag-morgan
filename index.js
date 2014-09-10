
var stream = require('mag-stream');
var morgan = require('morgan');

/**
 * Create a logger middleware.
 *
 * @param {String} [namespace]
 * @param {String|Function} format
 * @param {Object} [options]
 * @return {Function} middleware
 */

module.exports = function(namespace, format, options) {

  if (arguments.length < 3) {
    options = format;
    format = namespace;
    namespace = 'express';
  }

  options = options || {};

  // force set buffer to false
  options.buffer = false;

  options.stream = {
    write: function(message) {
      // fix new line
      message = message.replace(/\n$/, '');
      stream.write({
        message: message,
        severity: 6,
        timestamp: new Date(),
        namespace: namespace
      });
    }
  };

  return morgan(format, options);
};
