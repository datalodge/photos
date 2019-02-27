const express = require('express');
const path = require('path');
const parse = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
const db = require('../database/index.js');


const app = express();
const port = 3001;

app.use(parse.json());

// app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/', expressStaticGzip(path.join(__dirname, '/../client/dist'), {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz',
  }],
  orderPreference: ['br', 'gz'],
}));

app.get('/pictures/:homeId', (req, res) => {
  db.getAll(req.params.homeId, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.post('/pictures/post/:homeId', (req, res) => {
  // TO-DO POST
});

app.delete('/pictures/delete/:homeId', (req, res) => {
  // TO-DO DELETE
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
