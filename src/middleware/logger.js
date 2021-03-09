'use strict';


function logger(request, response, next){
  console.log(`${request.method} :: ${request.url}`);
  // if (request.method === 'POST'){
  //     next('We not ready yet for post')
  // }
  next();
}

module.exports = logger;