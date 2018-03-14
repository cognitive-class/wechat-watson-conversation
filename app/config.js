'use strict';

const ENV = process.env;

module.exports = {
  wechat: {
    token: ENV.WECHAT_TOKEN,
    encodingAESKey: ENV.WECHAT_ENCODING_AES_KEY,
  },
  watsonConversation: {
    workspace_id: ENV.WATSON_WORKSPACE_ID,
    username: ENV.WATSON_USERNAME,
    password: ENV.WATSON_PASSWORD,
    url: 'https://gateway.watsonplatform.net/conversation/api/',
    version_date: '2017-05-26',
  },
};
