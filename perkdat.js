// Given functions getA(), getB(), getC():

function getA() {
  return 'A'
}

function getB(callback) {
  setTimeout(() => {
      callback('B')
  }, 10)
}

function getC() {
  return Promise.resolve()
      .then(() => 'C')
}

function getABC() {
  // should call getA, getB, and getC
  // and return a promise aggregating each function's result
  // like ['A', 'B', 'C']

  // Write your implementation here:
    
}

getABC().then(function (result) {
  console.log(result)
})
