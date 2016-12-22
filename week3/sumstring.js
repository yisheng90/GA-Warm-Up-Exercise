var string1 = '12-3487569-5'
var string2 = 'Iam1234'

function sumString (numString) {
  var string = numString.match(/[0-9-]*/)[0]
  if (string === '') {
    return 'Please enter a number string.'
  } else {
    var sum = 0
    var i = 0
    while (i < string.length) {
      if (string[i].match(/[0-9]/)) {
        sum += parseInt(string[i])
        i++
      } else if (string[i].match(/-/)) {
        sum -= parseInt(string[(i + 1)])
        i += 2
      }
    }
    return sum
  }
}

console.log(sumString(string2))
console.log(sumString(string1))
