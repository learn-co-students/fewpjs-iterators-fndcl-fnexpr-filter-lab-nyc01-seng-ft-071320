// Code your solution here
// function findMatching(names, search){
//     return names.filter(name => (name === search) || (name === (search.charAt(0).toUpperCase() + search.slice(1))))
// }
// //wtf

function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }


// function fuzzyMatch(names, search) {
//     return names.filter(function(name){
//         for(const searchLetter of search){
//             for(const nameLetter of name){
//                 searchLetter === nameLetter
//             }
//         }
//     })
// }

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }


function matchName(source, string){
    return source.filter(possibleMatch => 
        possibleMatch.name.toLowerCase() === string.toLowerCase()    
    )
}