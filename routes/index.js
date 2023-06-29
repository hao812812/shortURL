const express = require('express')
const route = express.Router()

const home = require('./modules/home')

//看到/導去home
route.use('/', home)

module.exports = route