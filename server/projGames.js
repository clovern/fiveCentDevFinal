const projGamesRouter = require('express').Router();

//FIXME - eventually this should send the project document. But for now we are just having it send something random so we know this is working correctly. 
//need to send a get request from my website somewhere, otherwise this will be irrelevant. And ultimately should be connecting my website to run on this as well. 
projGamesRouter.get('/', (req, res, next) => {
  res.send("POTATOES");
  console.log("POTATOES");
});

projGamesRouter.get('/:id', (req, res, next) => {
  // res.send("Hello");
  res.json("Hello");
  console.log(req.params.id);
  //this is logging hello
})

//FIXME - I don't think you can just log id. So figure out what is required to retrieve the id from this input.

module.exports = projGamesRouter;