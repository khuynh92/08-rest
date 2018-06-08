'use strict';

const router = require('../lib/router');
const fs = require('fs');


router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';

  fs.readFile(__dirname + '/../../public/index.html', (err, data) => {
    let message = `HOMEPAGE <br><br> access api by going  <a href='api/v1/pizza'>here`;
    res.write(data.toString().replace('{{template}}', message));
    res.end();
  });

});

router.get('/api/v1/pizza', (req,res) => {
  
  if (req.url.query.id === 'missing') {
    res.statusCode = 404;
    res.statusMessage = 'OK';
    res.write(`Not found`);
    res.end();
  } else if(req.url.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID: ${req.url.query.id} was requested`);
    res.end();
  }  else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write('Bad Request');
    res.end();
  }
});

router.post('/api/v1/pizza', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body) );
  res.end();
});

router.put('/api/v1/pizza', (req,res) => {
  if(req.url.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(JSON.stringify(req.body) );
    res.end();
  } else {
    res.statusCode = 404;
    res.statusMessage = 'OK';
    res.write(`Not found`);
    res.end();
  }
});

router.delete('/api/v1/pizza', (req,res) => {
  if(req.url.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID: ${req.url.query.id} has been deleted`);
    res.end();
  } else {
    res.statusCode = 404;
    res.statusMessage = 'OK';
    res.write(`Not found`);
    res.end();
  }
});
