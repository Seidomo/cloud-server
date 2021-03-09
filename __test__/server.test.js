'use strict';


const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);


describe('server test', () =>{
  test('should log', async ()=>{
    const response = await request.get('/person?name=Pete');
    expect(response.status).toEqual(200);
    expect(response.body.name). toEqual('Pete');
  });
});