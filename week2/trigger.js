var times = [1000, 2000, 3000, 4000]

// this...
/*
times.forEach(function (element, index, array) {
  setTimeout(function () {
    console.log('timer at index', index, 'triggered')
  }, element)
})
*/
// … is the same as this
// (notice the absence of the ‘array’ parameter in the forEach callback)
// (we can leave it out because we don't need it here)

times.forEach(function (element, index) {
  setTimeout(function () {
    console.log('timer at index', index, 'triggered')
  }, element)
})

// … and is also the same as this
// (notice the renamed parameters - we can name it whatever we want)
// (it’s the position that matters)
/*
times.forEach(function (chicken, alibaba) {
  setTimeout(function () {
    console.log('timer at index', alibaba, 'triggered')
  }, chicken)
})
*/
