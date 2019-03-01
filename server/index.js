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
      data.forEach((photo) => {
        let url = 'https://s3.us-east-2.amazonaws.com/data-house-photos/photos139.jpg'
        let thumburl = 'https://s3.us-east-2.amazonaws.com/data-house-photos/thumb_photos139.jpg'
        photo.url = url;
        photo.thumb_url = thumburl;
      })
      res.json(data);
    }
  });
});

app.post('/pictures/:homeId', (req, res) => {
  // TO-DO POST
  db.postPhoto(req.params.homeId, (err, res) => {
    if(err){
      console.log(err)
    } else {
      res.send('posted photo')
    }
  })
});

app.delete('/pictures/:homeId', (req, res) => {
  // TO-DO DELETE
  db.deletePhoto(req.params.homeId, (err, data) => {
    if(err){
      console.log(err)
    } else {
      res.send('successfully deleted a picture')
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
