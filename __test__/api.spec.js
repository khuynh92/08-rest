'use strict';

const superagent = require('superagent');
const app = require('../src/app.js');
describe('app module', () => {

  beforeAll( () => {
    app.start(3002);
  });

  afterAll( () => {
    app.stop();
  });

  it('should return 200 for homepage', () => {
    return superagent.get('http://localhost:3002')
      .then(response => {
        expect(response.text).toEqual(expect.stringContaining('<!DOCTYPE '));
      });
  });

  it('should return ID for get', () => {
    return superagent.get('http://localhost:3002/api/v1/pizza?id=pineapples')
      .then(response => {
        expect(response.text).toEqual(`ID: pineapples was requested`);
      });
  });

  it('if no id is given, should return bad request', () => {
    return superagent.get('http://localhost:3002/api/v1/pizza')
      // .then(response => false);
      .catch(err => {
        expect(err.status).toBe(400);
        expect(err.response.text).toBe('Bad Request');
      });
  });

  it('if given bad id, should return not found', () => {
    return superagent.get('http://localhost:3002/api/v1/pizza?id=missing')
      // .then(response => false);
      .catch(err => {
        expect(err.status).toBe(404);
        expect(err.response.text).toBe('Not found');
      });
  });

  it('handles a good post request', () => {
    let obj = {id:'No Pineapples'};
    return superagent.post('http://localhost:3002/api/v1/pizza')
      .send(obj)
      .then(response => {
        expect(response.text).toEqual(expect.stringContaining('{"id":"No Pineapples"}'));
      })
      .catch(console.err);
  });

  it('handles a 400 error with no body', () => {
    return superagent.post('http://localhost:3002/api/v1/pizza')
  
      // .then(response => false)
      .catch(err => {
        console.log(err.status);
        expect(err.status).toBe(400);
        expect(err.response.text).toEqual('bad request');
      });
  });

  it('handles a good put request', () => {

    let obj = {id:'No Pineapples'};
    return superagent.put('http://localhost:3002/api/v1/pizza?id=hello')
      .send(obj)
      .then(response => {
        expect(response.text).toEqual(expect.stringContaining('{"id":"No Pineapples"}'));
      })
      .catch(console.err);
  });

  it('handles no id for put', () => {

    let obj = {not:'No Pineapples'};
    return superagent.put('http://localhost:3002/api/v1/pizza')
      .send(obj)
      // .then(response => false)
      .catch(err => {
        expect(err.response.text).toEqual(expect.stringContaining('Not found'));
      });

  });

  it('should handle good delete request', () => {
    return superagent.delete('http://localhost:3002/api/v1/pizza?id=veggies')
      .then(response => {
        expect(response.text).toEqual(`ID: veggies has been deleted`);
      });
  });
  
  it('should handle a bad delete request', () => {
    return superagent.delete('http://localhost:3002/api/v1/pizza?keep=calzones')
      // .then(response => false)
      .catch(err => {
        expect(err.response.text).toEqual(`Not found`);
      });
  });
});