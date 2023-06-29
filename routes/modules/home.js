//載入express
const express = require('express')
const router = express.Router()

//載入其他模組
const URL = require('../../models/urls')
const randomNumber = require('../../randomNumber')



// 設定首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

//POST 正常網址
router.post('/', (req, res) => {
  const url = req.body.url
  let randomURL = randomNumber(5);

  randomURL = checkedURL(randomURL)

  //資料庫確認是否重複有這筆短網址
  function checkedURL(randomURL) {
    URL.findOne({ shorterURL: randomURL })
      .then((data) => {
        if (data) {
          randomURL = randomNumber(5);
          checkedURL(randomURL);
        }
      })
      .catch((error) => console.log(error));
    return randomURL;
  }

  //查找資料庫是否有這筆url
  URL.findOne({ url })
    .then((data) => {
      //若沒有則新增
      if (!data) {
        return URL.create({ url, shorterURL: randomURL });
      }
      return data;
    })
    //將新增url渲染進index
    .then((data) => res.render("index", { shortURL: data.shorterURL }))
    .catch((error) => console.log(error));
});

// 瀏覽器中輸入 shortURL get 原本URL
router.get("/:shortURL", (req, res) => {
  const shortURL = req.params.shortURL;

  URL.findOne({ shorterURL: shortURL })
    .then((data) => {
      if (!data) {
        return res.render("error");
      } else {
        res.redirect(data.url);
      }
    })
    .catch((error) => console.log(error));
});



module.exports = router