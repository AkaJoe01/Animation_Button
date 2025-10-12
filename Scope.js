let localVar = "I'm local!";
function showLocalVar() {
    let localVar = "I'm local!";
    console.log(localVar);
}
showLocalVar();
console.log(localVar);

// bBlock scope with (let and const)
 if (true) {
     let blockVar = "I'm block scope!";
     console.log(blockVar);
}

function greet(name) {
    console.log(`Hello, ${name}!`)
 }
 greet("Alice");
 greet("Bob");

function greet (name) {
    name = "stranger";
    console.log(`What's up, ${name}!`);
}

// greet('stranger');

function getCoordiante() {
    return [10, 20];
}
let [x, y] = getCoordiante();
console.log(x, y);

function getUser() {
    return {name : "Josh", age: 25};
}
let user = getUser();
console.log(user.name);
console.log(user.age);

function calculateArea(length, width) {
    let area = length * width;
    return area;
}

let roomArea = calculateArea(5, 6);
console.log(`The size of the room is ${roomArea}`);

const sayCheese = (name) => `Hello, ${name}!`;
console.log(sayCheese("Alice"))

// For single expressions
const square = (num) => num * num;
console.log(square(6));