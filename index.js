const findMatching = (drivers, string) => {
  return drivers.filter(driver =>
    driver.toLowerCase() === string.toLowerCase()
  )
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver =>
    driver.toLowerCase().indexOf(string.toLowerCase()) === 0
  )
}

const matchName = (drivers, string) => {
  return drivers.filter(driver =>
    driver.name === string
  )
}
