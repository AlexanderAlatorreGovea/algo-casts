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
    const midPoint = Math.floor((n * 2 - 1) / 2)

    for(let row = 0; row < n; row++) {
        let level = '';

        for(let column = 0; column < (n * 2 - 1); column++ ) {
            if(midPoint - row <= column && midPoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }
        console.log(midPoint)
    }

    // const midPoint = Math.floor((n * 2 - 1) / 2);
    // for(let row = 0; row < n; row++) {
    //     let level = '';
    //     for(let column = 0; column < n * 2 - 1; column++) {
    //         if(midPoint - row <= column && midPoint + row >= column) {
    //             level += '#'
    //           } else {
    //             level += ' '
    //           }
    //     }
    //     console.log(level)
    // }
}

module.exports = pyramid;
