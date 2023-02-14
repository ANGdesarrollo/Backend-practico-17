// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console({ level: 'info' }),
        new transports.File({ filename: 'warn.log', level: 'warn' }),
        new transports.File({ filename: 'error.log', level: 'error' })
    ]
});

module.exports = logger;
