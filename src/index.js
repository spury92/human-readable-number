let beforeTwentyMap = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
}
let beforeHundredMap = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred'
}

module.exports = function toReadable (number) {
  if (number < 20) {
    return beforeTwentyMap[number]
  } else if (number < 100) {
    return beforeHundred(number)
  } else {
    return Hundreds(number)
  }

  function beforeHundred(number) {
    if (number in beforeHundredMap) {
      return beforeHundredMap[number]
    } else {
      return beforeHundredMap[number - (number % 10)] + ' ' + beforeTwentyMap[number % 10]
    }
  }
  function Hundreds(number) {
    if (number % 100 >= 20) {
      return beforeTwentyMap[Math.floor(number / 100)] + ' hundred ' + beforeHundred(number % 100)
    } else if (number % 100 != 0) {
      return beforeTwentyMap[Math.floor(number / 100)] + ' hundred ' + beforeTwentyMap[number % 100]
    } else {
      return beforeTwentyMap[Math.floor(number / 100)] + ' hundred'
    }
  }
}
