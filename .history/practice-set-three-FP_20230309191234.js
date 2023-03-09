// Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const carsWithModel = [{
        make: "Toyota",
        model: "Corolla",
        year: 2010
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2012
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2015
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2018
    },
];

// Your code here
const getCarDetails = arr => arr.filter(el => el.year > 2012);

const getCars = getCarDetails(carsWithModel);
console.log(getCars);
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]

// Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const productsForDaily = [{
        name: "Toothbrush",
        price: 29,
        category: "health"
    },
    {
        name: "Coffee Maker",
        price: 99,
        category: "home"
    },
    {
        name: "iPad",
        price: 799,
        category: "electronics"
    },
    {
        name: "Smartwatch",
        price: 199,
        category: "electronics"
    },
];

// Your code here
const findElectronicsProduct = arr => arr.find(({
    category
}) => category === 'electronics');

const electronicsProduct = findElectronicsProduct(productsForDaily);
console.log(electronicsProduct);
// Output: { name: "iPad", price: 799, category: "electronics" }

// Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

const products = [{
        name: "Toothbrush",
        price: 29,
        category: "health"
    },
    {
        name: "Coffee Maker",
        price: 99,
        category: "home"
    },
    {
        name: "iPad",
        price: 799,
        category: "electronics"
    },
    {
        name: "Smartwatch",
        price: 199,
        category: "electronics"
    },
];

// Your code here

const findElectronicsProducts = arr => arr.filter(({
    category
}) => category === 'electronics')

const electronicProducts = getAllElectronicProducts(products);
console.log(electronicProducts);
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]



// Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

const studentsWithGrade = [{
        name: "Alice",
        age: 16,
        grade: 90
    },
    {
        name: "Bob",
        age: 17,
        grade: 80
    },
    {
        name: "Charlie",
        age: 15,
        grade: 95
    },
    {
        name: "David",
        age: 16,
        grade: 85
    },
];
// Your code here
const filterStudentsByGrade = (arr, givenGrade) => arr.filter(({
    grade
}) => grade > givenGrade);

const highGradeStudents = filterStudentsByGrade(studentsWithGrade, 85);
console.log(highGradeStudents);
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]


// Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.


const booksWithPageCount = [{
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pageCount: 1178
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pageCount: 281
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        pageCount: 193
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        pageCount: 662
    },
];

// Your code here

const findBookWithMoreThan500Pages = arr => arr.find(({
    pageCount
}) => pageCount > 500);

const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(booksWithPageCount);
console.log(bookWithMoreThan500Pages);
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }


// 6. Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.


const customers = [{
        name: 'John',
        age: 25,
        gender: 'Male'
    },
    {
        name: 'Jane',
        age: 30,
        gender: 'Female'
    },
    {
        name: 'Bob',
        age: 40,
        gender: 'Male'
    },
    {
        name: 'Alice',
        age: 35,
        gender: 'Female'
    },
];
// Your code here
const getMaleCustomers = arr => arr.filter(({
    gender
}) => gender === 'Male');

const maleCustomers = getMaleCustomers(customers);
console.log(maleCustomers);
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]



// 7. Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.
// 1. Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.



const cars = [{
        make: "Toyota",
        model: "Corolla",
        year: 2010
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2012
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2015
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2018
    },
];

// Your code here
// const toyotaCar = ({make, year}) => (make === 'Toyota')&&(year > 2010);
const findToyotaCar = (arr) => arr.find(({
    make,
    year
}) => (make === 'Toyota') && (year > 2010));

console.log(findToyotaCar(cars));
// Output: { make: "Toyota", model: "Camry", year: 2015 }

const toyotaCar = findToyotaCar(cars);
console.log(toyotaCar);
// Output: { make: "Toyota", model: "Camry", year: 2015 }




const games = [{
        title: "The Witcher 3: Wild Hunt",
        developer: "CD Projekt Red",
        genre: "RPG"
    },
    {
        title: "Grand Theft Auto V",
        developer: "Rockstar North",
        genre: "Action"
    },
    {
        title: "Portal 2",
        developer: "Valve Corporation",
        genre: "Puzzle"
    },
    {
        title: "The Legend of Zelda: Breath of the Wild",
        developer: "Nintendo",
        genre: "Adventure"
    }
];
// Your code here
const filterByGenre = (arr, givenGenre) => arr.filter(({
    genre
}) => genre === givenGenre);

const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]


// Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.

const carsDetails = [{
        make: "Toyota",
        model: "Corolla",
        year: 2010
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2012
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2015
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2018
    },
];

// Your code here
const getCarModel = arr => arr.filter(({
    year
}) => year > 2012).map(({
    model
}) => model)

const carModels = getCarModel(carsDetails);
console.log(carModels);
// Output: ["Camry", "Mustang"]