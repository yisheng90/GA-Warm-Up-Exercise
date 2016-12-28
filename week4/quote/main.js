var quotes = [
  {'quote': 'Muddy water is best cleared by leaving it alone.',
    'author': 'Alan Watts'},
  {'quote': 'There is only one happiness in this life, to love and be loved.',
    'author': 'George Sand'},
  {'quote': 'Life is 10 percent what happens to you and 90 percent how you react to it.',
    'author': 'Charles R. Swindoll'},
  {'quote': 'The greatest gift of life is friendship, and I have received it.',
    'author': 'Hubert H. Humphrey'},
  {'quote': 'The spirit of Christmas is the spirit of love and of generosity and of goodness. It illuminates the picture window of the soul, and we look out upon the world\'s busy life and become more interested in people than in things.',
    'author': 'Thomas S. Monson'}
]

$(document).ready(function () {
  $('#next').click(function () {
    var num = Math.floor(Math.random() * (quotes.length - 1))
  //  alert(num)
    $('.quote h1').text(quotes[num].quote)
    $('.quote h2').text(quotes[num].author)

      $('.tweet').attr('href', 'http://twitter.com/home/?status=' + quotes[num].quote +' ~ '+ quotes[num].author)
      .text('click to tweet')

  })
})
