import { log } from 'console';
import fs from 'fs';
import path from 'path';



// Function to format log messages
const formatLogMessage = (level, message, endpoint) => {
    const timestamp = new Date().toISOString();
    return `${level.toUpperCase()} [${timestamp}]  ${endpoint} : ${message}\n`;
};

// Function to log messages to a file
const logToFile = (level, message, endpoint) => {
    const logFilePath = path.join("./logger/", 'app.log');
    const logMessage = formatLogMessage(level, message, endpoint);

    // Append log message to file
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
};

// Logger function
const Logger = (level, message, endpoint) => {
    //console.log(level,message, endpoint)
    console.log(formatLogMessage(level, message, endpoint)); // Log to console
    logToFile(level, message, endpoint); // Log to file
};

export default Logger;
