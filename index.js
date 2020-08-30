// Code your solution here
function findMatching(drivers, string) {
    let result = drivers.filter(function(driver) {
        return driver.toUpperCase() === string.toUpperCase();
    })
    return result;
}

function fuzzyMatch(drivers, string) {
   let result = drivers.filter(function(driver) {
        return driver.slice(0,2).includes(string);
    })
    return result;
}

function matchName(drivers, string) {
    let result = drivers.filter(function(driver) {
        return driver.name === string
    })
    return result;
}