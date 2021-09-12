// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunked = [];

//   for(let element of array) {
//     const last = chunked[chunked.length -1]; //last element in the chunked array so first time we will get undefined
//     if(!last || last.length  === size) {//first time is undefined and we will fall into this statement
//         chunked.push([element]) // this line of code says that we will push a new chunck into the chunked with the currrent element we will iterate over which is one on first loop
//     } else {
//         last.push(element) //since the last element exists then we push the next element in the array which is 2
//     }// finally we will iterate to the last element of the array then we chesk if the length is equal to the chunk size which it is because it created a new chunk and add 3
//    }
//    return chunked
// } 

function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length == size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

module.exports = chunk;
