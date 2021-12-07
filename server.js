const express = require('express');
const app = express();
const cors = require('cors');


module.exports = app;

const PORT = (process.env.port || 4001);

app.use(express.static('public'));

app.use(cors());

// middleware for parsing request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendStatus(200);
  http_response_code(200);
  res.redirect('/home.html')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
