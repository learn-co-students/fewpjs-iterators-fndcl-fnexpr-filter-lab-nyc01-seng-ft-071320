function findMatching(array, string) {
    let filtered = array.filter(d => {
        return d.toLowerCase() === string.toLowerCase();
    })
    return filtered
}

function fuzzyMatch(array, string) {
    let filtered = array.filter(d => {
        return string === d.substring(0, 2)
    });
    return filtered
}

function matchName(array, string) {
    let filtered = array.filter(d => {
        return d.name === string
    })
    return filtered
}