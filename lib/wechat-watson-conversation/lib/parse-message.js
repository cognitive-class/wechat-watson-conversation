'use strict';

/**
 * ```js
 * // message.FromUserName
 * // message.ToUserName
 * // message.CreateTime
 * // message.MsgType
 * // message.Content
 * // message.MsgId
 * const { message } = req;
 * ```
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports = (req, res, next) => {
  const message = {};
  Object.keys(req.body.xml).forEach(each => {
    const [item] = req.body.xml[each];
    message[each] = item;
  });
  req.message = message;
  next();
};
