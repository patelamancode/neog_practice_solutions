// Solutions

// 1: Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

let array = [4, 78, 8, 3, 6, 0, 12, 34];
const maxNumber = arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}
maxNumber(array);