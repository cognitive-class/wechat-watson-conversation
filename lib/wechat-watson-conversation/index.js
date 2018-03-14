'use strict';

const bodyParser = require('body-parser');
const xmlBodyParser = require('body-parser-xml');
const watsonConversation = require('./lib/conversation');
const wechatAuth = require('./lib/wechat-auth');
const parseMessage = require('./lib/parse-message');
const messageContext = require('./lib/message-context');

/**
 * Avaliable plugin
 * `app.locals.chat` - Watson conversation message method
 * `req.user` - user openid
 * `req.message` - incoming POST request message
 * @param {Object} app
 * @param {Object} config
 * @param {String} path - Path to mount the wechat endpoint
 */
const wechatWatconConversation = (app, config, path) => {
  app.config = { ...app.config, ...config };
  watsonConversation(app, config.watsonConversation);
  app.use(path || '/', wechatAuth);
  xmlBodyParser(bodyParser);
  app.use(path || '/', bodyParser.xml());
  app.post(path || '/', parseMessage, messageContext);
};

module.exports = {
  wechatWatconConversation,
  watsonConversation,
  wechatAuth,
  parseMessage,
  messageContext,
};
