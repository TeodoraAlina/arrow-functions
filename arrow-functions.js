/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTWoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTWoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTWoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum2 = addTWoNumbers(6, 4);
console.log(sum2);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTWoNumbers2 = (a, b) => a + b;
let sum = addTWoNumbers2(3, 5);
console.log(sum);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');
const sayHello = () => console.log('Hello!');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());