var tiles = "orppgma"
var word = "program"
var check = ""

function scrabble (tiles, word) {
  for (var i = 0; i< word.length; i++) {
    if ( tiles.includes(word[i])) {
      check += word[i]
      tiles = tiles.replace(tiles[tiles.indexOf(word[i])],"")
    } else if (tiles.includes('?')) {
      check += word[i]
      tiles = tiles.replace(tiles[tiles.indexOf('?')],"")
    } else {
      return false
    }
  
    if (i=== word.length-1) {
      return true
    }
  
  }

}



console.log(scrabble("lailmy", "daily"))
console.log(scrabble("eerriin", "eerie"))
console.log(scrabble("orrpgma", "program")) 
console.log(scrabble("orppgma", "program"))
console.log(scrabble("pizza??", "pizzazz"))
console.log(scrabble("piizza?", "pizzazz"))
console.log(scrabble("a??????", "program"))
console.log(scrabble("b??????", "program"))



