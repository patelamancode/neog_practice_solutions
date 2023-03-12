// que 1:

// Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here

const calcLength = str => str.length;
const totalLength = givenArray => givenArray.reduce((acc, curr) => acc + curr.length, 0)

console.log(totalLength(strings));
// Output: 30


//  que 2:
// Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers = [1, 2, 3, 4, 5];
// Your code here

const sumSquares = givenNumArray => givenNumArray.reduce((acc, curr) => acc + (curr * curr), 0)

console.log(sumSquares(numbers));
// Output: 55 


//  que 3:
// Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [{
        name: "Item 1",
        price: 10
    },
    {
        name: "Item 2",
        price: 20
    },
    {
        name: "Item 3",
        price: 30
    }
];
// Your code here

const totalValue = arr => arr.reduce((acc, {
    price
}) => acc + price, 0);

console.log(totalValue(items));
// Output: 60


// que 4:
// Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here

const concatStrings = arr => arr.reduce((acc, curr) => acc + curr, '')

console.log(concatStrings(['this', 'is', 'fun']));
// Output: 'thisisfun'


// que 5:
// Write an ES6 function to multiply and return all the elements of a given array.

const number = [1, 2, 3, 4, 5];
// Your code here

const productOfNum = arr => arr.reduce((acc, curr) => acc * curr, 1)

console.log(productOfNum(number));
// Output: 120


// que 6:
// Write an ES6 function that takes an array of strings and returns the longest string.

const stringsForCamp = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here
const longestString = arr => arr.reduce((acc, curr) => (curr.length > acc.length) ? curr : acc, '')


console.log(longestString(stringsForCamp));
// Output: 'Haule Haule'


// que 7:
// Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.
const people = [{
        name: 'Jeena',
        age: 25
    },
    {
        name: 'Priya',
        age: 30
    },
    {
        name: 'Naina',
        age: 45
    }
]
// Your code here

const oldestPersonName = arr => arr.reduce(
    (acc, curr) => {
        if (curr.age > acc) {
            acc = curr.age;
        }
        return curr.name
    }, 0)

console.log(oldestPersonName(people));
// Output: 'Naina'


// que 8:
// Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const peoples = [{
        name: 'Alice',
        age: 25
    },
    {
        name: 'Bob',
        age: 30
    },
    {
        name: 'Charlie',
        age: 35
    },
    {
        name: 'David',
        age: 40
    }
];
// Your code here

const getAverageAge = givenArray => {
    let avg = givenArray.reduce((acc, {
        age
    }) => acc + age, 0) / givenArray.length;
    return ({
        average: avg
    })
}
console.log(getAverageAge(peoples));
// Output: { averageAge: 32.5 }


// que 9:
// Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const products = [{
        name: "Bread",
        price: 10,
        quantity: 2
    },
    {
        name: "Clips",
        price: 20,
        quantity: 5
    },
    {
        name: "Knife",
        price: 30,
        quantity: 1
    },
    {
        name: "Slipper",
        price: 40,
        quantity: 3
    }
];
// Your code here

const findMostExpensiveProduct = arr => arr.reduce((prevSum, curr) =>
    (prevSum < curr.price * curr.quantity) ? (prevSum = curr.price * curr.quantity) : curr, 0)

console.log(findMostExpensiveProduct(products));
// { name: "Slipper", price: 40, quantity: 3 }



// que 10:
// Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// Your code here

const countString = arr => arr.reduce((acc, curr) => {

}, 0)

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }