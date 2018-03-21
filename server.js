const express = require('express');

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Tic-Tac-Toe");
});

app.listen(port, () => {
  console.log('listening on ' + port);
})
