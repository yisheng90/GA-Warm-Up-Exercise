$(document).ready(function () {
  $('body').mousemove(function (event) {
    //
    var top = event.pageY
    var left = event.pageX
    var imageMove = setTimeout(function () {
      var mousex = parseInt($('img').css('top'))
      var mousey = parseInt($('img').css('left'))
      var property
      if ((mousey > left) && (top > mousex)) {
        console.log('yesh')
        property = 'scaleX(-1) rotate(90deg)'
      } else if ((mousey > left) && (top < mousex)) {
        property = 'scaleX(-1)'
      } else if ((mousey < left) && (top > mousex)) {
        property = 'scaleX(1) rotate(90deg)'
      } else if ((mousey < left)) {
        property = 'scaleX(1)'
      }

      $('img').css({
        'transform': property,
        'top': top,
        'left': left
      })
    }, 500)

  //  console.log('mouse', mousex)
  })
})
