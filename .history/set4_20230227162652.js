// let tag = document.querySelector('#heading');

// tag.style.color = "red";



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
//     return console.log(newOddArray);
// }

// evenToOddConverter(array)

// ========================

// 4: write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

// const arrayWithFiveLetters = arr => {
//     let resultedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 5) {
//             resultedArray.push(arr[i])
//         }
//     }
//     return console.log(resultedArray);
// }
// arrayWithFiveLetters(["hello", "worlds", "Target", "Big-Bombay"]);

// =======================

// 5: Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

// const capitalizedArray = arr => {
//     let resultedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         resultedArray.push(arr[i].toUpperCase())
//     }
//     return console.log(resultedArray);
// }
// capitalizedArray(["hello", "worlds", "Target", "Big-Bombay"])

// ==============================

// 6 : Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const givenArrayOfObjects = [{
        name: "John",
        age: 21
    },
    {
        name: "Mary",
        age: 22
    },
    {
        name: "Peter",
        age: 23
    },
];

const getValues = (arr, key) => {
    let resultedArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultedArray.push(arr[i].key)
    }
    return console.log(resultedArray);
}

getValues(givenArrayOfObjects, "name")