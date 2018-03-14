'use strict';

const crypto = require('crypto');

const verifyServerRequest = (token, signature, timestamp, nonce) => {
  const tmpStr = [ token, timestamp, nonce ].sort().toString().replace(/,/g, '');
  const sha1Code = crypto.createHash('sha1');
  const code = sha1Code.update(tmpStr, 'utf-8').digest('hex');
  return code === signature;
};

// Validate request signature
// Attach user openid under `req.user`
module.exports = (req, res, next) => {
  const { token } = req.app.config.wechat;
  const {
    signature,
    timestamp,
    nonce,
    openid,
  } = req.query;

  if (verifyServerRequest(token, signature, timestamp, nonce)) {
    if (openid) req.user = openid;
    next();
  } else {
    res.status(401).send('forbidden');
  }
};
