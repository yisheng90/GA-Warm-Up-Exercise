$(document).ready(function () {
  var ball = $('.ball')
  var size = $('.size')

  $('.style1').click(function () {
    ball.addClass('style1')
    .removeClass('style2')
    .removeClass('style3')
    size.addClass('style1').removeClass('style2').removeClass('style3')
  })

  $('.style2').click(function () {
    ball.addClass('style2').removeClass('style1').removeClass('style3')
    size.addClass('style2').removeClass('style1').removeClass('style3')
  })

  $('.style3').click(function () {
    ball.addClass('style3').removeClass('style1').removeClass('style2')
    size.addClass('style3').removeClass('style1').removeClass('style2')
  })

  $('.size1').click(function () {
    var styles = {
      width: '5%',
      height: '8%'
    }

    ball.css(styles)
  })

  $('.size2').click(function () {
    var styles = {
      width: '10%',
      height: '18%'
    }

    ball.css(styles)
  })

  $('.size3').click(function () {
    var styles = {
      width: '20%',
      height: '36%'
    }
    ball.css(styles)
  })

  var timeout
  $('#up').mousedown(function () {
    timeout = setInterval(function () {
      if (checkPosition('top') > '0') {
        ball.css('top', '-=1%')
      }
    }, 10)
  })

  $('#down').mousedown(function () {
    timeout = setInterval(function () {
      if (checkPosition('bottom') > '0') {
        ball.css('top', '+=1%')
      }
    }, 10)
  })

  $('#left').mousedown(function () {
    timeout = setInterval(function () {
      if (checkPosition('left') > '0') {
        ball.css('left', '-=1%')
      }
    }, 10)
  })

  $('#right').mousedown(function () {
    timeout = setInterval(function () {
      if (checkPosition('right') > '0') {
        ball.css('left', '+=1%')
      }
    }, 10)
  })

  var value = $(document).keydown(function (event) {
    var char = {
      37: 'left',
      38: 'top',
      39: 'right',
      40: 'bottom'
    }

    if (checkPosition(char[event.which]) > '0') {
      if (event.which < 39) {
        ball.css(char[event.which], '-=1%')
      } else {
        ball.css(char[event.which - 2], '+=1%')
      }
    }
  })

  function checkPosition (x) {
    var position = ball.css(x)
    console.log(position)
    return position
  }

  $(document).mouseup(function () {
    clearInterval(timeout)
  })

  $(document).keyup(function () {
    clearInterval(timeout)
  })
})
