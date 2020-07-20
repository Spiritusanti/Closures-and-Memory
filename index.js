// 2 main benefits to closures
// 1. very memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill('Huzzah!')
  console.log('created')
  return bigArray[index]
}

heavyDuty(1500)
heavyDuty(1500)
heavyDuty(1500)
heavyDuty(1500)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(1700)
getHeavyDuty(900)
getHeavyDuty(4500)
// with this function we create our large array every single time. How can we create it only once? Closures!

function heavyDuty2() {
  const bigArray = new Array(7000).fill('Bazinga!')
  console.log('created hd2')
  return function(index) {
    return bigArray[index]
  }
}

// with closures we only create the array once and able to access it multiple times before removing it from the memory heap

// 2. encapsulation