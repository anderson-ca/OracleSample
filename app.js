const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('hello, Oracle!');
});


app.listen(8080, () => {
  console.log('app running on port 8080');
});
