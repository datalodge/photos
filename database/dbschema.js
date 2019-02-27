const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/picture-viewer', { useNewUrlParser: true });

const pictureViewerSchema = new mongoose.Schema({
  homeId: Number,
  url: String,
  thumb_url: String,
  is_primary: Boolean,
  description: String,
});

const DataModel = mongoose.model('DataModel', pictureViewerSchema);

const s3Bucket = 'https://s3.us-east-2.amazonaws.com/data-house-photos/photos/photos1.jpg';