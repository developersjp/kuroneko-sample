'use strict'
require('dotenv').config({path: '../.env'});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

const path = require('path');

const { bot, controller } = require('./bot')
const { SLACK_WEBHOOK_URL } = require("./config");

bot.startRTM((err) => {
  if (err) {
    throw new Error(err);
  }
})

bot.configureIncomingWebhook({
  url: SLACK_WEBHOOK_URL
})

controller.on('rtm_reconnect_failed',function(bot) {
  console.log('\n\n*** '+moment().format() + ' ** Unable to automatically reconnect to rtm after a closed conection.')
})

function getPermalink(message){
  const targetMessage = message.item || message
  const ts = targetMessage.ts? targetMessage.ts.replace('.', '') : null
  return ts? `https://${process.env.SLACK_WORKSPACE}.slack.com/archives/${targetMessage.channel}/p${ts}` : ''
}

controller.on('ambient', (bot, message)=> {  
  if( message.channel !== 'CDQMKBULA'){
    bot.api.channels.info({
      channel: message.channel,
    }, (e, res) => {
      bot.reply({
        'channel': 'CAAP48AJG'
      }, `こんにちは\n${getPermalink(message)}`, (err, response)=> {
      })
    })
  }    
})