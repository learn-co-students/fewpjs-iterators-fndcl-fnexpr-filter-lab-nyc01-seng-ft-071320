// Code your solution here

function findMatching(array, string) {
  return array.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()

  })
}

function fuzzyMatch(array, string){
  return array.filter(driver => {
    return driver[0].toLowerCase() === string[0].toLowerCase()
  })
}

function matchName(array, string){
  return array.filter(driver => {
    return driver['name'] === string
    
  })
}