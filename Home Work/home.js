// using let variable
let carName = "Volvo";
 carName = "Toyota";
console.log(carName);

// using const variable
const price1 = 50;
const price2 = 100;
const total = price1 + price2;
console.log(total);

// Using many variables
let person = "sharon", age = 30, city = "U.S.A";
console.log(person, age, city);

// Using span multiple lines
let firstName = "Celine";
let lastName = "Ronaldo";
let fullName = firstName + " " + lastName;
let carName2 = "BMW";
const price = 1000;
console.log(fullName);
console.log(carName2);
console.log(price);

// Using constant arrays
const phones = ["samsung", "Tecno", "Nokia", "Xiaomi"];
phones[0] = "Iphone", // To change an element
phones.push("Infinix"); // To add an element
//phones.pop("Nokia"); // To remove an element
console.log(phones);
console.log(phones.push);
console.log(phones.pop);

/*
// Using constant object
const car = { type:"BMW", model:"2025", color:"black"};
car.color = "white"; 
car.owner = "Sharon";
console.log(type, model, color);
//console.log(car.color);
//console.log(car.owner);*/

/*
// String ( A text of character enclosed in quotes)
let color = "Yellow";
let lastName1 = "Johnson";

// Number ( A number representing a mathematical valve)
let length = 16;
let weight = 7.5;

// BigInt ( A number representing a large integer)
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345)

// Boolean ( A data type representing true or false, yes or no, on and off,)
let c = true;
let d = false;

// Object( A collection of key-value pairs of data)
const person1 = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined ( A primitive variable with no assigned value)
let e;
let f;

// Null ( A primitive value representing object absence)
let g = null;
let h = null;

// Symbol ( A unique and primitive identifier)
const x = Symbol();
const y = Symbol();*/

// Single quote inside double quotes:
let mine1 = "This is me";
console.log(mine1);

// Single quotes inside double quotes:
let mine2 = "My name is 'Sharon'";
console.log(mine2);

// Double quotes inside single quotes:
let mine3 = 'I lived in "Lagos"';
console.log(mine3);

/*// Grade Calculator 1
let score = 90;
if (score >= 90){
    console.log("Grade: A");
}
else if (score >=80){
    console.log("Grade: B");
}
else if (score >=70){
    console.log("Grade: C");
}
else if (score >=60){
    console.log("Grade: D")
}
else if (score >=40){
    console.log("Grade: f");
}*/

// Grade Calculator 2
function calculateGrade(score){
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    if (score >= 40) return "F";
}
console.log(calculateGrade(45));
console.log(calculateGrade(77));
console.log(calculateGrade(98));
console.log(calculateGrade(67));
console.log(calculateGrade(88));

// Even Number Filter
function filterEvenNumbers(numbers){
    let evenNumbers = 0;
    for (let num of numbers) {
        if (num %2 ===0) {
            evenNumbers.push(num);
        }
        return evenNumbers;
    }
}
let nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(nums));

// Sum Array
function sumArray(numbers){
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sumArray([1, 2, 3, 4, 5]));

// Array Properties
let fruits = ["apple", "banana", "orange", "mango", "lemon"];
let citrus = fruits.slice(1, 3);
let last = fruits.slice(2);
let lastThree = fruits.slice(-3);
let removed = fruits.splice(1, 2,);

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(Array.isArray(fruits));

fruits[1] = "gover";
console.log(fruits);

// Push() is to add an element to the end of array, returns new length.
fruits.push("paw paw");
console.log(fruits);

// Adding multiple fruits
fruits.push("water-melon", "carrot");
console.log(fruits);

// pop() is to remove an element from the end of array, returns new length.
fruits.pop("carrot");
console.log(fruits);

// unshift() is to add an element at the beginning, returns new length.
fruits.unshift("carrot");
console.log(fruits);

// Adding by using multiple element at the beginning.
fruits.unshift("grape","cashew");
console.log(fruits);

// shift() is to remove an element from the beginning.
fruits.shift("grape");
console.log(fruits);

// slice() - Extract Portion (Non-Destructive),
// Returns a new array without modifying original.
// slice(start, end) - end not included
fruits.slice(1, 3,);
console.log(citrus);
console.log(fruits); // original unchanged

// from index to end
fruits.slice(2);
console.log(last);

// last n element ( negative index).
fruits.slice(-3);
console.log(lastThree);

// splice() - Add/Remove Elements (Destructive)
// Modifies original array: removes and/or adds elements.

// splice(start, deleteCount, item1, item2, ...)
fruits.splice(1, 2,);
console.log(removed);
console.log(fruits);


// forEach() Iterate Over Array
// Executes function for each element.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.forEach(function(num){
    console.log(num * 2);
}
)

// with arrow function
numbers.forEach(num=>console.log(num * 2));




