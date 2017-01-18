const app = "I don't do much."

function bumpCounter() {
  
  var counter = 0

  function addBump() {
    counter += 1
    return counter
  }

  function getBumps() {
    return counter
  }

  return {
    getBumps,
    addBump
  }
}
/* const { addBump, getBumps } = bumpCounter() 
this works because it deconstructs the bumpCounter() into its two separate 'shortcuts' that are connected. Note that it doesn't work if you do the const declarations separately.
*/

function createAnimal(animalType) {
  
  return function createMonster(deadlyDevice) {
    return {
    animalType,
    deadlyDevice
    }
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")

