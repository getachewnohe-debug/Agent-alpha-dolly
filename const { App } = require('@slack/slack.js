const { App } = require('@slack/bolt');
const { askGemini } = require('./gemini');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message(async ({ message, say }) => {
  try {
    if (message.subtype) return;

    console.log(`Message received: ${message.text}`);
    const response = await askGemini(message.text);

    await say({
      text: response,
      thread_ts: message.ts,
    });
  } catch (error) {
    console.error('Slack error:', error);
    await say('Sorry, something went wrong.');
  }
});

async function startSlackApp() {
  await app.start();
  console.log('✅ Slack app connected!');
}

module.exports = { startSlackApp };
