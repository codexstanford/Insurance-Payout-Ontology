const express = require('express');

const app = express();

const APPLICATION_PORT = 8444;

app.use(express.static('public'));

app.listen(APPLICATION_PORT, () => {
  console.log(`Start on port ${APPLICATION_PORT}`);
})