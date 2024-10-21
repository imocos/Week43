// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");


function drawTree(treeHeight) {

    for (let i = treeHeight - 1; i >= 1; i--) {
        let stars = '*'.repeat((treeHeight - i) * 2 - 1);
        let spaces = ' '.repeat(i-1);
        console.log(spaces + stars);
    }
    let trunkSpaces = ' '.repeat(treeHeight - 2);
    console.log(trunkSpaces + 'x');
}

drawTree(5);
drawTree(7);

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(arrowLength) {
    for (let i = 1; i <= arrowLength; i++) {
    let stars = '* '.repeat(i);
    console.log(stars);
    }
    for (let i = arrowLength - 1; i >= 1; i--){
        let stars = '* '.repeat(i);
        console.log(stars);
    }   
}

drawArrow(3);
console.log(' ');
drawArrow(5);



/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(n, m) {
   console.log('+' + '-'.repeat(m * 4) + '+');

   for (let i = 0; i < n; i++) {
    console.log('|' + ' '.repeat(m * 4) + '|');
   }
   console.log('+' + '-'.repeat(m * 4) + '+');
}


drawBox(2, 2);

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isHeterogram(word){
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    let charSet = new Set();

    for (let char of word) {
        if (charSet.has(char)) {
            return `"${word}" is NOT a heterogram.`;
        }
        charSet.add(char);
    }
    return `"${word}" is a heterogram.`;
}

console.log(isHeterogram("cupcake"));
console.log(isHeterogram("liberty"));



/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function isAnagram(word1, word2) {
    word1 = word1.toLowerCase().replace(/[^a-z]/g, '');
    word2 = word2.toLowerCase().replace(/[^a-z]/g, '');
    
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    if (sortedWord1 === sortedWord2) {
        return `"${word1}" and "${word2}" are anagrams.`
    } else {
        return `"${word1}" and "${word2}" are NOT anagrams.`
    }
}

console.log(isAnagram("batman", "manbat"));
console.log(isAnagram("orange", "orangutan"));