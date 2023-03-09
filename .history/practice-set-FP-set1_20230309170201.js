// Practice set 1 solution for Functional programming

const sampleNumberedArray = [1, 3, 5, 7, 9, 11, 23, 32];

const incrementByThree = num => num + 3;
const sampleFunction = arr => arr.map(incrementByThree);
console.log(sampleFunction(sampleNumberedArray));


const sampleStringArray = ['apple', 'banana', 'cherry', 'grapes', 'Pineapple'];

const capitalString = str => str.toUpperCase();
const capitalFunction = arr => arr.map(capitalString);
console.log(capitalFunction(sampleStringArray))

const people = [{
        name: 'Ankit',
        age: 25
    },
    {
        name: 'Vinit',
        age: 24
    },
    {
        name: 'Shashi',
        age: 29
    }
];

const age = ({
    age
}) => age;
const generalFunctionOfGivenArrayForObjects = arr => arr.map(age);
console.log(generalFunctionOfGivenArrayForObjects(people))

const products = [{
        name: 'Lip Balm',
        stock: 100
    },
    {
        name: 'PERFUME',
        stock: 400
    },
    {
        name: 'Socks',
        stock: 200
    }
];

const capitalStrings = str => str.toLowerCase();
const product = ({
    name
}) => capitalStrings(name);
const forAllProductsInGivenArray = arr => arr.map(product);
console.log(forAllProductsInGivenArray(products));

const cities = [{
        name: 'New York',
        population: 8538000
    },
    {
        name: 'Los Angeles',
        population: 3976000
    },
    {
        name: 'Bangalore',
        population: 13608000
    }
];

const names = ({
    name
}) => name;
const forAllNamesOfGivenArray = arr => arr.map(names);
console.log(forAllNamesOfGivenArray(cities))




const forLengthgreaterThanFive = str => (str.length > 5);
const functionForLength = arr => arr.filter(forLengthgreaterThanFive);
console.log(functionForLength(sampleStringArray));




const numbers = [1, 2, 30, 4, 15];
const divisibleBy3And5 = num => (num % 3 === 0) && (num % 5 === 0);
const numbersDivisibleBy3And5 = arr => arr.filter(divisibleBy3And5);
console.log(numbersDivisibleBy3And5(numbers))

console.log(divisibleBy3And5(30))


let people1 = [{
        name: 'Rahul',
        age: 25
    },
    {
        name: 'Raj',
        age: 35
    },
    {
        name: 'Vijay',
        age: 45
    }
];

const ageGreaterThan30 = ({
    name,
    age
}) => {
    if (age > 30)
        return ({
            name,
            age
        })
}
const sortedArrayOfAbove30 = arr => arr.filter(ageGreaterThan30);
console.log(sortedArrayOfAbove30(people1))

const students = [{
        name: 'Aditya',
        score: 85
    },
    {
        name: 'Bob',
        score: 75
    },
    {
        name: 'Charlie',
        score: 90
    }
];

const scoreGreaterThan30 = ({
    score,
    ...rest
}) => {
    if (score > 80)
        return ({
            rest,
            score
        })
}
const checkScore = arr => arr.filter(scoreGreaterThan30);
console.log(checkScore(students))


const people2 = [{
        name: 'Ridhima',
        age: 75,
        city: 'Indore'
    },
    {
        name: 'Akshay',
        age: 60,
        city: 'Delhi'
    },
    {
        name: 'Udit',
        age: 80,
        city: 'Indore'
    },
    {
        name: 'Venki',
        age: 80,
        city: 'Bangalore'
    }
];

const findCityAndAge = ({
    age,
    city,
    ...rest
}) => {
    if (age > 70 && city === 'Indore')
        return ({
            rest,
            age,
            city
        })
}
const checkPeople = arr => arr.filter(findCityAndAge)
console.log(checkPeople(people2))


const books = [{
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Science Fiction"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance"
    }
];

const selectedBook = ({
    genre,
    ...rest
}) => {
    if (genre === 'Science Fiction')
        return ({
            rest,
            genre
        })
}
const filteredBooks = arr => arr.filter(selectedBook);
console.log(filteredBooks(books))


const employees = [{
        name: "Abhay",
        age: 25,
        salary: 20000
    },
    {
        name: "Joice",
        age: 30,
        salary: 35000
    },
    {
        name: "Reena",
        age: 35,
        salary: 15000
    },
    {
        name: "Jeena",
        age: 40,
        salary: 50000
    }
];

const checkSalaryWithAge = ({
    age,
    salary,
    ...rest
}) => {
    if (salary > 22000 && age > 25)
        return ({
            rest,
            age,
            salary
        })
}

const checkSalaryWithAgeBySC = ({
    age,
    salary,
    ...rest
}) => (salary > 22000 && age > 25) && ({
    rest,
    age,
    salary
})
const filteredEmployee = arr => arr.filter(checkSalaryWithAgeBySC);
console.log(filteredEmployee(employees))


const increaseBy10 = arr => arr.map(el => el + 10);
console.log(increaseBy10([1, 34, 23, 35]))



const obj = {
    a: 10,
    b: 12,
    arr: [10, 8, 15, 14]
};
const findNumDivisibleBy5And3 = ({
    a,
    b,
    arr
}) => arr.find(num => (num % 3 === 0 && num % 5 === 0))
console.log(findNumDivisibleBy5And3(obj))


const obj1 = {
    details: [{
            name: 'Ankit',
            company: 'Chalo'
        },
        {
            name: 'Rohan',
            company: 'Razorpay'
        },
        {
            name: 'Shivam',
            company: 'No Broker'
        }
    ]
}

const findCompany = obj => {
    const {
        details
    } = obj;
    const result = details.map(key => key.company)
    return result;
}
console.log(findCompany(obj))

const findWithNameA = inputObj => {
    const {
        details
    } = obj;
    const result = details.map(el => (el.name.startsWith('A') ? el.company : null))
    return result;
}
console.log(findWithNameA(obj))