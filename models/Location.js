const mongoose = require("mongoose");
const { Schema } = mongoose;

const LocationSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
const Locateme = mongoose.model("location", LocationSchema);
Locateme.createIndexes();
module.exports = Locateme;
