// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//iteration of n integers
//throw a for loop that will run an n number of times
//add one pound on each iteration
//if steps === 1 then just return '#'


function steps(n) {
    for(let row = 0; row < n; row++) {
        //1. create a row of stairs where each row is called row
        //row is inside this for loop and column will create the columns
        let stairs = '';
        //create a column that will to complete multi dimensional
        //array
        for(let column = 0; column < n; column++) {
            //if the column is less than or equal to the row
            //add a pound
            if(column <= row) {
                stairs += '#'
            } else {
                stairs += ' '
            }
        }
        console.log(stairs);
    }
}

module.exports = steps;
