'use strict';

const Router = require('express-async-router').AsyncRouter;
const { reply } = require('node-weixin-message');

const router = Router();

// GET /
// Verify server avaliablility
router.get('/', (req, res) => {
  const { echostr } = req.query;
  res.send(echostr);
});

// POST /
// Handler all incoming message from wechat
router.post('/', async (req, res) => {
  const { message, chatContext } = req;
  const { chat } = req.app.locals;

  const { output: { text }, context } = await chat(message.Content, chatContext);

  const storage = req.sessionStore;
  storage.set(req.user, context);

  const response = reply.text(message.ToUserName, message.FromUserName, text[0]);
  res.set('Content-Type', 'text/xml');
  res.send(response);
});

module.exports = router;
