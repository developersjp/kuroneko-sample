const {BOT_CONFIG, SLACK_TOKEN, SLACK_DEBUG, SLACK_WEBHOOK_URL} = require("./config")
const winston = require('winston')

let controller, bot;
const Botkit = require("botkit");

controller = Botkit.slackbot({
  clientId: BOT_CONFIG.clientId,
  clientSecret: BOT_CONFIG.clientSecret,
  scopes: ['bot'],
  logger: winston.loggers.get('botkit')
}).configureSlackApp(
  BOT_CONFIG
);

bot = controller.spawn({
  token: SLACK_TOKEN,
  debug: SLACK_DEBUG,
  retry: 1000
})

module.exports = {
  bot: bot,
  controller: controller
}