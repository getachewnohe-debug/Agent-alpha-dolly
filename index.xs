require('dotenv').config();
const { startSlackApp } = require('./slack');

(async () => {
  try {
    await startSlackApp();
    console.log('⚡ Agent Alpha Dolly is running!');
  } catch (error) {
    console.error('Failed to start:', error);
    process.exit(1);
  }
})(
