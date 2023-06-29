const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URL_shortenerSchema = new Schema({
  url: { type: String, required: true },
  shorterURL: { type: String, required: true },
})
module.exports = mongoose.model('URL', URL_shortenerSchema)