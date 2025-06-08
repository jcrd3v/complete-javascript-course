/*
// ==========================================
// 18. Taking Decisions: if / else Statements
// ==========================================

// if - else control structure: the whole code doesn't execute linearly, we can controle if we want to execute some blocks or not.
const age = 17;
const firstName = "Lucía";
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`${firstName} can apply for a driver's license 🚗🚗!!!`);
} else {
  const yearsLeft = 18 - age;
  console.log(`${firstName} is too young. Wait another ${yearsLeft} ${yearsLeft === 1 ? "year": "years"} 😊🚗!!!`);
}

const birthYear = 1998;
let century = 0; // If we would have declared this variable within the if-else block we wouldn't be able to access it outside the if-else block.

if (birthYear <= 2000) {
  century = 20 
} else {
  century = 21;
}

console.log(century);

// ================
// 19. CHALLENGE #2
// ================
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// This code is from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark.toFixed(1), BMIJohn.toFixed(1));

// Write your code below. Good luck! 🙂 

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else if (BMIJohn > BMIMark) {
//     console.log(`Jhon's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// } else {
//     console.log(`Both have the same Body Mass Index 👌😁!`);
// }

console.log(
    BMIMark > BMIJohn 
    ? `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!` 
    : `Jhon's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`
);

*/

// =================================
// 20. Type Conversion and Coercion
// =================================

// Type Conversion is when we explicitly manually convert from one type to another.
const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Josué")); // This returns NaN -> Not a number, this happens whenever an operation that involves number fails in returning a number.
console.log(typeof NaN);
console.log(typeof String(26));
console.log(String(26), 26);

// Type Coercion is when Javascript converts implicitly from one type to another.
console.log("I'm " + 26 + " years old."); // The plus operator in this case will convert the number into a string.
console.log("23" - "10" - 3); // The minus operator between strings are converted into numbers.
console.log("23" + "10" + 3); // The plus operator between strings are converted into a string.
console.log("23" * "2"); // The multiplication operator between strings are converted into numbers.
console.log("23" / "2"); // The division operator between strings are converted into numbers.

let n = "1" + 1; // 11 it's a string.
n = n - 1; // 10 it's a number.
console.log(n); // logs 10 it's a number.

console.log(2 + 3 + 4 + "5"); // logs 95 it's a string.
console.log("10" - "4" - "3" - 2 + "5"); // logs 15 it's a string.

// ============================
// 21. Truthy and Falsy Values
// ============================
