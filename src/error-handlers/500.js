'use strict';

function errorNotFound (err, request, response, next){
  const error = err.message ? err.message : err;
  console.log(error);

  response.status(500).send(error);

}

module.exports = errorNotFound;