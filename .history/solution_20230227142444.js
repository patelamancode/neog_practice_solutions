// Some leet code Problems

// 1 : You will be given an array of numbers and a target number, two numbers from the given array add up to the target number. find the indices of the two numbers and return them as a string.

const arrGiven = [1, 3, 5, 6, 8];
const targetNumber = [11];

const printIndexValues = (arr, num) => {
    let i, j;
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                break
            }
        }
    }
    return `indexes of values are ${i} & ${j} whose sum is ${num}`
}


// 2 : You are given a string that contains consecutive words that are same, return a string will all the repeating consecutive words removed.


//  3: You are given an lower case string and an array of numbers, capitalize the characters that lie on the indices determined by the numbers in the array.


//  4: Your are giving a string that has uppercase and lowercase characters, change the string completely to upper or lover case, based on what would take the least amount of changes.


//  5: write a function that adds infinite number of passed arguments;