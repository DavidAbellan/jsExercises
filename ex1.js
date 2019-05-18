//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// Example input [3, 6, 8, 2] output [6, 8]


function fiveAndGreaterOnly(numbers) {
    // your code 
    let nuevoArray = [];
  for ( number of numbers){
    if (number >= 5){

        nuevoArray.push(number);
    }  


  }
  return nuevoArray;

}



const test = require('./tools/test');

test(fiveAndGreaterOnly, [[1,2,3]], []);
test(fiveAndGreaterOnly, [[1,2,3, 4,5]], [5]);
test(fiveAndGreaterOnly, [[5, 6, 7, 8]], [5,6,7,8]);
