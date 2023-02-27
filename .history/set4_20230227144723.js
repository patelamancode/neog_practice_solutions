// Solutions

// 1: Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

let array = [4, 78, 8, 3, 6, 0, 12, 34];

// const maxNumber = arr => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > result) {
//             result = arr[i];
//         }
//     }
//     return result;
// }
// maxNumber(array);

// ======================


//  2 : Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

// const averageOfArray = arr =>{
//     let sum=0;
//     for(let i=0; i<arr.length ; i++){
//         sum += arr[i];
//     }
//     return `The average of given array is ${(sum)/arr.length}`
// }

// =================================


//  3: write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

// const evenToOddConverter = arr => {
//     let newOddArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newOddArray.push(arr[i] + 1)
//         } else {
//             newOddArray.push(arr[i]);
//         }
//     }
//     return newOddArray;
// }

// ========================

// 4: write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

let tag = document.querySelector('#heading');

tag.style.color = "red";