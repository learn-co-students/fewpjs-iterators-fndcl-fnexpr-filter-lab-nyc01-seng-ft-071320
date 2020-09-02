// Code your solution here


const findMatching = (array, string) => {

    return array.filter(person => person.toLowerCase() === string.toLowerCase())

}

const fuzzyMatch = (array, string) => {
    return array.filter(person => person.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

const matchName = (array, string) => {
    return array.filter(person => person.name === string)
}