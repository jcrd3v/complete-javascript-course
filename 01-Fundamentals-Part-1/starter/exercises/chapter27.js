/*

1. Which of the following is an expression?
    a) if (x > 5) { console.log("big"); }
    b) const name = "John";
    c) 2 + 3 * 4 (THIS ONE)
    d) for (let i = 0; i < 5; i++) { }

2. What's the main difference between statements and expressions?
    a) Statements are faster than expressions
    b) Expressions produce values, statements perform actions (THIS ONE)
    c) Statements can only use numbers
    d) Expressions can't be used in functions

3. Which can be used inside template literals (${})?
    a) Only statements
    b) Only expressions (THIS ONE)
    c) Both statements and expressions
    d) Neither statements nor expressions

4. What happens if you try to put a statement where JavaScript expects an expression?
    a) It works perfectly fine
    b) JavaScript converts it automatically
    c) You get a syntax error (THIS ONE)
    d) It returns undefined

5. Which of these is a statement?
    a) true && false
    b) Math.random()
    c) let age = 25; (THIS ONE)
    d) "Hello" + "World"

6. Can you assign the result of a statement to a variable?
    a) Yes, always
    b) No, because statements don't produce values (THIS ONE)
    c) Only with const
    d) Only with var

7. In this code: console.log(5 > 3), what is 5 > 3?
    a) A statement
    b) An expression (THIS ONE)
    c) A declaration
    d) A loop

8. Which of these would cause an error in template literals?
    a) ${2 + 2}
    b) ${user.name}
    c) ${if (true) { "hello" }} (THIS ONE)
    d) ${Math.floor(4.7)}

*/


/*

Exercise 1: Expression Detective
Create a JavaScript program that demonstrates the difference between expressions and statements. Your program should:

Create at least 5 different expressions and store their results in variables
Use at least 3 different statements (like if, for, variable declarations)
Use template literals that include expressions (not statements) to display results
Add comments explaining which parts are expressions and which are statements

*/

/*
// EVERY DECLARATION IS AN STATEMENT HERE
let expressionOne = (18 + 19 + 16) / 3;  // (18 + 19 + 16) / 3 THIS IS THE EXPRESSION
let expressionTwo = "Josué Carlos Alberto Ramos Suyoc"; // "Josué Carlos Alberto Ramos Suyoc" IS THE EXPRESSION
let expressionThree = ["works as an interpreter", "does an internship", "studies Software Engineering"]; // NOT SURE IF THE WHOLE ARRAY IS AN EXPRESSION I THINK IT IS BUT WHAT I'M SURE ABOUT IS THAT EACH STRING IS AN EXPRESSION
let expressionFour = 27; // 27 IS THE EXPRESSION HERE
let expressionFive = "eight"; // "EIGHT" IS THE EXPRESSION

// THE WHOLE IF IS AN STATEMENT HERE
if (expressionOne >= 12) { // "expressionOne >= 12" IS THE EXPRESSION, IT PRODUCES A BOOLEAN VALUE IN THIS CASE TRUE
    console.log(`The student: ${expressionTwo} has successfully passed the course!`); // THE TEMPLATE LITERAL IS THE EXPRESSION, ALSO THE "${expressionTwo}"
}

// THE WHOLE FOR IS AN STATEMENT HERE AND THE NESTED IF AS WELL
for (let i = 0; i < expressionThree.length; i++) { // WE HAVE ONE EXPRESSION HERE: THE CONDITIONAL. THE DECLARATION IS AN STATEMENT. WHAT I'M NOT SURE IS IF THE i++ IS AN EXPRESSION. I THINK IS BOTH BECAUSE IT'S LIKE TYPE i = i + 1; HERE i+1 PRODUCES A VALUE AND THE WHOLE IS AN STATEMENT. I THINK IT'S MOSTLY AN STATEMENT BUT HAS AN EXPRESSION
    if (i === 0) // WE HAVE A BOOLEAN EXPRESSION
        console.log(`The student ${expressionTwo} does different activities during his days`); // THE TEMPLATE LITERAL IS AND ALSO THE ${...}
    console.log(`The student ${expressionThree[i]}.`); // THE TEMPLATE LITERAL IS AND ALSO THE ${...}
}

// EVERY DECLARATION IS AN STATEMENT HERE
let studentAge = expressionFour; // expressionFour IS THE EXPRESSION
let studentSemester = expressionFive; // expressionFive IS THE EXPRESSION

*/


/*

Exercise 2: Template Literal Challenge
Write a program that calculates and displays information about a person using template literals. Your program should:

Declare variables for: firstName, lastName, birthYear, currentYear
Use expressions within template literals to calculate and display the person's age
Include conditional expressions (ternary operator) inside template literals to show different messages
Try to include a statement inside a template literal and observe what happens (comment out this line after testing)
Display at least 3 different messages using template literals with embedded expressions

*/

/*

const firstName = "Josué";
const lastName = "Ramos";
const birthYear = 1998;
let currentYear = 2025;
let age = currentYear - birthYear;

console.log(`${firstName} ${lastName} is ${age} ${age === 1 ? `year old.` : `years old.`}`);

const { randomInt } = require("crypto");
console.log(`I rolled a dice! This is the value: ${randomInt(1, 7)}`);

console.log(`${firstName} ${lastName} will be 30 years old in ${30 - age} ${age === 1 ? `year.` : `years.`}`);

// console.log(`${firstName} ${lastName} is ${let age = currentYear - birthYear;} ${age === 1 ? `year old.` : `years old.`}`); SyntaxError

 */