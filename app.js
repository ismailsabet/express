const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Welcome to the homepage!');
  res.send('Hello World');
});

app.listen(5000, () => {
  console.log('App listening on port 5000');
});
