const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000

const app = express();

app.get("/", (req, res) => {
  res.send("Tic-Tac-Toe");
});

app.listen(port, () => {
  console.log('listening on ' + port);
})
