/**
 * Displays a message on the STDOUT.
 * @param {String} msg The message to display.
 */
function displayMessage(message) {
    process.stdout.write(message + '\n');
}

module.exports = displayMessage;
