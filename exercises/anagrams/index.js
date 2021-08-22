// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//ignore space and punctuations with
//word.replace(/[^\w]/g, "").toLowerCase()

function objectCharacterMap(string) {
  let obj = {};
  const replacedStr = string.replace(/[^\w]/g, "").toLowerCase();

  for (let char of replacedStr) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  return obj;
}

function anagrams(stringA, stringB) {
  const stringOne = objectCharacterMap(stringA);
  const stringTwo = objectCharacterMap(stringB);

  if (Object.keys(stringOne).length !== Object.keys(stringTwo).length) {
    return false;
  }

  for (let char in stringOne) {
    if (stringOne[char] === stringTwo[char]) {
      return true;
    }
  }

  return false;
}

module.exports = anagrams;
