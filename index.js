function findMatching(drivers, string) {
  let result = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()
  })
  return result
}

const fuzzyMatch = (drivers, string) => {
  let result = drivers.filter(driver => {
    if (driver.charAt(0) === string.charAt(0)) {
      return driver
    }
  })
  return result
}

function matchName(drivers, string) {
  let result = drivers.filter(driver => {
    if (driver.name === string) {
      return driver
    }
  })
  return result
}