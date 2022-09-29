var mongoose = require('mongoose')

var imageSchema = new mongoose.Schema({
  img: String,
})

module.exports = new mongoose.model('Image', imageSchema)
