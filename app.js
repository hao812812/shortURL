// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')

const bodyParser = require('body-parser')

require('./config/mongoose')



// 引用路由器
const routes = require('./routes')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(bodyParser.urlencoded({ extended: true }))



// 將 request 導入路由器
app.use(routes)


app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})



