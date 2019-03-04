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
  db.get(req.params.homeId)
    .then((photos) => {
      photos.forEach((photo) => {
        let s3Path = 'https://s3.us-east-2.amazonaws.com/data-house-photos/';
        photo.url = s3Path + 'photos' + photo.url + '.jpg';
        photo.thumb_url = s3Path + 'thumb_photos' + photo.thumb_url + '.jpg'
      })
      console.log(photos)
      res.send(photos)
    })
    .catch((err) => {
      console.log(err);
    })
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
