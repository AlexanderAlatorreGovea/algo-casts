// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const stringArray = str.toLowerCase().split('')
    let countVowels = 0;
    for(let v of stringArray) {
      for(let b of vowels) {
        if(v === b) {
          countVowels++
        }
      }
    }
   return countVowels
}

module.exports = vowels;
