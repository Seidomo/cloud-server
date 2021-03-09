'use strict';

module.exports = function(request, response, next){
  console.log(request.query.name);
  if(!request.query.name){
    // response.send()
    next('Sorry Error');
  }
  next();
};