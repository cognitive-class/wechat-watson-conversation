'use strict';

const ConversationV1 = require('watson-developer-cloud/conversation/v1');
const Promise = require('bluebird');

// Attach `chat` at `app.locals.chat`
module.exports = (app, config) => {
  const watsonConfig = {
    ...{
      username: process.env.WATSON_USERNAME,
      password: process.env.WATSON_PASSWORD,
      version_date: '2017-05-26',
      url: 'https://gateway.watsonplatform.net/conversation/api/',
    },
    ...config,
  };

  const conversationV1 = new ConversationV1(watsonConfig);
  const message = Promise.promisify(conversationV1.message, { context: conversationV1 });

  const chat = async (text, context = null, workspaceId = null) => message({
    workspace_id: workspaceId || watsonConfig.workspace_id,
    input: { text },
    context,
  });

  app.locals = { chat };
};
