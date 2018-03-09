'use strict';

const app = require('express')();

app.get('/', (req, res) => {
  res.send('Wechat Demo');
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`server started on http://localhost:${port}`));
