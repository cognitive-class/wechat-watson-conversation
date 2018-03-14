'use strict';

const app = require('express')();
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const index = require('./routes');
const config = require('./config');
const { wechatWatconConversation } = require('wechat-watson-conversation');

// Session
// You can easily use any other compatible session store
// https://github.com/expressjs/session#compatible-session-stores
app.use(session({
  store: new MemoryStore({
    checkPeriod: 86400000, // prune expired entries every 24h
  }),
  resave: false,
  saveUninitialized: true,
  secret: 'keyboard cat',
}));

wechatWatconConversation(app, config);

// Attach routers
app.use('/', index);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`server started on http://localhost:${port}`));
