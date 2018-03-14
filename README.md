# wechat-watson-conversation
Watson Conversation integration in wechat for ExpressJS.

## Usage
### Install
```bash
yarn add wechat-watson-conversation
```
OR
```bash
npm i wechat-watson-conversation
```

### Example
Detail example is also avaliable [here](app/).
```js
const { wechatWatconConversation } = requir ('wechat-watson-conversation');

const ENV = process.env;
const config = {
  wechat: {
    token: ENV.WECHAT_TOKEN,
    encodingAESKey: ENV.WECHAT_ENCODING_AES_KEY,
  },
  watsonConversation: {
    workspace_id: ENV.WATSON_WORKSPACE_ID,
    username: ENV.WATSON_USERNAME,
    password: ENV.WATSON_PASSWORD,
  },
};

wechatWatconConversation(app, config, '/path');

app.post('/path', async (req, res) => {
  const { message, chatContext } = req; // Retrieve incoming message, and previous chat context is exist.
  const { chat } = req.app.locals; // Watson conversation message method

  const { output: { text }, context } = await chat(message.Content, chatContext);
  const storage = req.sessionStore;
  storage.set(req.user, context);

  const response = reply.text(message.ToUserName, message.FromUserName, text[0]);
  res.set('Content-Type', 'text/xml');
  res.send(response);
})
```

### Modules
The library also exposes each individual middleware if you prefer more flexbility.

- [watsonConversation](lib/wechat-watson-conversation/lib/conversation.js),
- [wechatAuth](lib/wechat-watson-conversation/lib/wechat-auth.js),
- [parseMessage](lib/wechat-watson-conversation/lib/parse-message.js),
- [messageContext](lib/wechat-watson-conversation/lib/message-context.js),

## Development
### Require
- NodeJS: `~8.9.4`
- Yarn
- [Autoenv](https://github.com/kennethreitz/autoenv)

### Setup
- `cp .env.example .env`
- `yarn install`
- `yarn dev`

## Author
- IBM Cognitive Class, IBM Digital Business Group
