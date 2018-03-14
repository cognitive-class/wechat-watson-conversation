'use strict';

/**
 * To enable message-context middleware, you must
 * enable `express-session` middleware and `wechat-auth`
 * before this middleware.
 * ```js
 * const session = require('express-session');
 * const MemoryStore = require('memorystore')(session);
 *
 * // You can easily swipe the MemoryStore with
 * any other compatible session store
 * app.use(session({
 *     store: new MemoryStore({
 *     checkPeriod: 86400000, // prune expired entries every 24h
 *   }),
 *   resave: false,
 *   aveUninitialized: true,
 *   secret: 'keyboard cat',
 * }));
 * ```
 * @async
 * @see https://www.ibm.com/watson/developercloud/conversation/api/v1/?node#send_message
 * @see https://github.com/expressjs/session#compatible-session-stores
 */
module.exports = async (req, res, next) => {
  const storage = req.sessionStore;
  const getChatContext = () => new Promise((resolve, reject) => {
    storage.get(req.user, (err, session) => {
      if (err) reject(err);
      resolve(session);
    });
  });
  req.chatContext = await getChatContext();
  next();
};
