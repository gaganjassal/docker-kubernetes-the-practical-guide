const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World, from inside the very basic Node app!</h1>
  `);
})

app.listen(process.env.PORT);