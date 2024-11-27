const readline = require('readline');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the initial prompt
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the user's name after they input it
  console.log(`Your name is: ${name}`);

  // Close the readline interface and display the closing message
  rl.close();
});

// Event listener for when the readline interface closes
rl.on('close', () => {
  console.log('This important software is now closing');
});
