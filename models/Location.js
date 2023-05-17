const mongoose= require('mongoose');
const {Schema} = mongoose;

const LocationSchema = new Schema({
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
  });
  const Locateme= mongoose.model('location', LocationSchema);
  Locateme.createIndexes();
  module.exports= Locateme;