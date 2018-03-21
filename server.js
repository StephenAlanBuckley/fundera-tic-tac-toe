const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000

const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
//keep our static files (client js and css plus any images) in a public folder
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  res.render('index',
      {title: 'Tic-Tac-Toe'}
  )
});

app.listen(port, () => {
  console.log('listening on ' + port);
})
