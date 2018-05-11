const express = require('express');
const path = require('path');

const app = express();

const port = parseInt(process.env.PORT, 10) || 5000;

const pathTo = fileName => path.resolve(__dirname, 'app', 'web', fileName);

app.get('/', (req, res) => {
  res.sendFile(pathTo('index.html'));
});

app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}/`);
});
