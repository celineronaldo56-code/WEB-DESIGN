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
phones.pop("Nokia"); // To remove an element
console.log(phones);
console.log(phones.push);
console.log(phones.pop);

// Using constant object
const car = { type:"BMW", model:"2025", color:"black"};
car.color = "white"; 
car.owner = "Sharon";
console.log(type, model, color);
//console.log(car.color);
//console.log(car.owner);

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
const y = Symbol();


