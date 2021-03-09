'use strict';

const express = require('express');
const app = express();
const serverError = require('./error-handlers/500.js');
const errNotFound = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

app.get('/', (req, res) => {
  res.status(200).send('You have hit Seids route');
});



app.get('/person', logger, validator, getPerson);


function getPerson(request, response, next){
  let jsonObj = {name: request.query.name };
    
    
  response.json(jsonObj);

}


app.use(errNotFound);
app.use(serverError);


module.exports = {
  app: app,
  start : function (port){
    app.listen(port, ()=>{
      console.log('app is listening on port ::' + port);
    });
  },

};



