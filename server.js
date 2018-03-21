const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;

const app = express();

const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});


app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
//keep our static files (client js and css plus any images) in a public folder
app.use(express.static(__dirname + '/public'))

//Homepage
app.get("/", (req, res) => {
  res.render('index',
      {title: 'Tic-Tac-Toe'}
  )
});

//API
app.get("/wins/", (req, res) => {
  let wins = 0;

  client.connect();
  client.query('Select COUNT(*) FROM games WHERE completed AND winner != computer', (err, res) => {
      if (err) throw err;
        for (let row of res.rows) {
              wins = row;
              console.log(JSON.stringify(row));
                }
          client.end();
  });
  res.json(wins)
});

app.post("/games/", (req, res) => {
  let computer_x = Math.floor(Math.random() * 2) < 1;
  let computer = computer_x ? "X" : "Y";
  let game_id = -1;
  client.connect();
  client.query("INSERT INTO games (board_state, computer) values('---------', '" + computer + "') RETURNING game_id;", (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
          game_id = row;
          console.log("created game " + JSON.stringify(row));
      }
      client.end();
  });
  res.json(game_id);
});


app.listen(port, () => {
  console.log('listening on ' + port);
})

/*
 *
 * Just a reference for me for making DB calls

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
      for (let row of res.rows) {
            console.log(JSON.stringify(row));
              }
        client.end();
});
 *
*/
