const { createLogger, format, transports } = require('winston');
const path = require('path');

// Define logger
const logger = createLogger({
  level: 'info', // Levels: error, warn, info, http, verbose, debug, silly
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ level, message, timestamp }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.Console(), // Logs to console
    new transports.File({ filename: path.join(__dirname, '../logs/app.log') }), // Logs to file
  ],
});

module.exports = logger;