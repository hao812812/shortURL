
function randomNumber(times) {

  const smallLetters = 'abcdefghijklmnopqrstuvwxyz'
  const bigLetters = smallLetters.toUpperCase()
  const numbers = '0123456789'


  const all = smallLetters + bigLetters + numbers
  const min = 0
  const max = all.length - 1
  let Number = ''
  for (let i = 0; i < times; i++) {
    //隨機找出0-61 index，放入空陣列中
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min
    Number += all[randomIndex]

  }


  return Number
}

//傳回結果，不是傳回整個函式
module.exports = randomNumber