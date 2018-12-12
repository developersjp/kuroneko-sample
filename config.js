'use strict'
const SLACK_TOKEN = process.env.DEVELOP_SLACK_TOKEN || process.env.SLACK_TOKEN
const SLACK_DEBUG = (process.env.NODE_ENV === 'development')? true : false
module.exports = {
  BOT_CONFIG: {
    clientId: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET,
    scopes: ['bot']
  },
  SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
  SLACK_ADMIN_USERNAME: process.env.SLACK_ADMIN_USERNAME,
  SLACK_TOKEN: SLACK_TOKEN,
  SLACK_DEBUG: SLACK_DEBUG,
  APP_NAME: process.env.APP_NAME || "@APP_NAME",
}
