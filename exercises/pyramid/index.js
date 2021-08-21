// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####' 3/2 = 1.5 + 3 = 4.5

//1. you need to find the midpoint
//2. once you find the midpoint there are two options: 
//  a). We need to add a # based on that midpoint
//      a1). if the midpoint is  

function pyramid(n) {
    const midpoint = Math.round((n / 2) + n);
    for(let row = 0; row < n; row++) {
        let stair = '';
        for(let column = 0; column < midpoint; column++) {
            if(column >= midpoint && column <= midpoint) {
                stair += '#'
            } else {
                stair += ' '
            }
        }
        console.log(stair)
      }
}

module.exports = pyramid;
