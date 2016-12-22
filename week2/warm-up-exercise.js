var friends = ['David', 'Nick', 'Nico']

function toSentence (arr) {
  var sentence = arr.toString()
  var lIndex = sentence.lastIndexOf(',')
  if (sentence.includes(',')) {
    return sentence.substring(0, lIndex) + ' and ' + sentence.substring(lIndex + 1, sentence.length)
  } else {
    return sentence
  }
}

function toSentence2 (arr) {
  var sentence = arr[0]

  for (var i = 1; i < arr.length - 1; ++i) {
    sentence += ', ' + arr[i]
  }

  if (arr.length >= 2) {
    sentence += ' and ' + arr[arr.length - 1]
  }

  return sentence
}

console.log(toSentence2(friends))
