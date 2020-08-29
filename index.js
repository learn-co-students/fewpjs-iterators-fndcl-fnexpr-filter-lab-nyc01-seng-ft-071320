const findMatching = (array, name) => {
  const lower = name[0].toLowerCase() + name.slice(1)
  const upper = name[0].toUpperCase() + name.slice(1)
  return array.filter(e => e === lower || e === upper)
}

const fuzzyMatch = (array, letter) => {
  const lower = letter[0].toLowerCase()
  const upper = letter[0].toUpperCase()
  return array.filter(e => e[0] === lower || e[0] === upper)
}

const matchName = (obj, name) => {
  return obj.filter(e => e.name === name)
}
