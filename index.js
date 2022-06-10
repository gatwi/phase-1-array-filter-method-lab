// // Code your solution here
// function findMatching (source, sought) {
//     const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//     return SourceBuffer.filter (possibleMatch); possibleMatch.toLowerCase () === sought.toLowerCase ()
// }


function findMatching(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
}

function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
}

function fuzzyMatch(source, testString) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
}