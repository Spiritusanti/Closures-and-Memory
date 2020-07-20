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
// hiding of information that is unnecessary or shouldn't be handled by the outside world. 
// security principle --> principle of least privilege

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return 'explode';}
  setInterval(passTime, 1000)
  return {
    // launch: launch,
    totalPeaceTime: totalPeaceTime
  }
}

const ohNO = makeNuclearButton();
ohNO.totalPeaceTime();

// some data should not be directly exposed and closures allow us to accomplish this via encapsulation.