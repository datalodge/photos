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

const getAll = (input, callback) => {
  DataModel.find({ homeId: input }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const deletePhoto = (input, callback) => {
  DataModel.deleteOne({homeId: input}, (err, data) => {
    if(err){
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

const postPhoto = (input, callback) => {
  let newPic = new DataModel({
    homeId: input,
    url: 'string',
    thumb_url: 'string',
    is_primary: false,
    description: 'another string'
  })

  newPic.save((err, newPic) => {
    if(err){
      callback(err)
    } else {
      console.log('newPic')
    }
  })
}

module.exports = {
  getAll,
  deletePhoto,
  postPhoto
} 

