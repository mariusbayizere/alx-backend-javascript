const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
