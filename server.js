const express = require('express');
const app = express();
const cors = require('cors');
const projGameRouter = require('./server/projGames');


module.exports = app;

const PORT = (process.env.PORT || 4001);

app.use(express.static('public'));

app.use(cors());

// middleware for parsing request bodies
const bodyParser = require('body-parser');
// const { allowedNodeEnvironmentFlags } = require('process');
app.use(bodyParser.json());

// mount router
app.use("/gameDisplay", projGameRouter);

app.get('/', function(req, res) {
  res.redirect('/home.html')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
