// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(function(driver) {return driver.toLowerCase() == string.toLowerCase()})
}

function fuzzyMatch(drivers, string) {
    let number = string.length
    return drivers.filter(function(driver) {return driver.substr(0, number) == string})
}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {return driver.name == string})
}
