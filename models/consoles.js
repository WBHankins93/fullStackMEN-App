const mongoose = require('mongoose');

const consoleSchema = new mongoose.Schema({
  name : {type: String, required: true},
  img: String
});


module.exports = mongoose.model('Console', consoleSchema);
