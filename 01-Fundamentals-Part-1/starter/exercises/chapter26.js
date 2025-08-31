// =================
// Theory Questions:
// =================

/*

1. What happens if you forget to include a break statement in a switch case?
    a) The code will throw an error
    b) The execution will continue to the next case (fall-through behavior) (THIS ONE)
    c) The switch statement will automatically exit
    d) Only that specific case will execute

2. Which comparison operator does the switch statement use internally?
    a) == (loose equality)
    b) === (strict equality) (THIS ONE)
    c) != (not equal)
    d) > (greater than)

3. When is the default case executed in a switch statement?
    a) Always as the first case
    b) Only when explicitly called
    c) When none of the other cases match (THIS ONE)
    d) After all other cases have been executed

*/


// =================
// Coding Exercises:
// =================

/*

Exercise 1: Grade Calculator
Create a function that takes a letter grade (A, B, C, D, F) and returns the corresponding grade point average. Use a switch statement with the following requirements:

A = 4.0
B = 3.0
C = 2.0
D = 1.0
F = 0.0
Any invalid grade should return "Invalid grade"
Make it work for both uppercase and lowercase letters

*/

/*

// function gradeCalculator(letterGrade) {
//     switch (letterGrade) {
//         case "A":
//         case "a":
//             return 4.0;
//         case "B":
//         case "b":
//             return 3.0;
//         case "C":
//         case "c":
//             return 2.0;
//         case "D":
//         case "d":
//             return 1.0;
//         case "F":
//         case "f":
//             return 0.0;
//         default:
//             return "Invalid grade";
//     }
// }

function gradeCalculator(letterGrade) {
    if (typeof letterGrade === "string")
        letterGrade = letterGrade.toUpperCase();

    switch (letterGrade) {
        case "A":
            return 4.0;
        case "B":
            return 3.0;
        case "C":
            return 2.0;
        case "D":
            return 1.0;
        case "F":
            return 0.0;
        default:
            return "Invalid grade";
    }
}

// Test cases for Exercise 1: Grade Calculator

console.log("=== Grade Calculator Tests ===");

// Test uppercase letters
console.log("Grade A:", gradeCalculator("A"));
console.log("Grade B:", gradeCalculator("B"));
console.log("Grade C:", gradeCalculator("C"));
console.log("Grade D:", gradeCalculator("D"));
console.log("Grade F:", gradeCalculator("F"));

// Test lowercase letters
console.log("Grade a:", gradeCalculator("a"));
console.log("Grade b:", gradeCalculator("b"));
console.log("Grade f:", gradeCalculator("f"));

// Test invalid grades
console.log("Grade X:", gradeCalculator("X"));
console.log("Grade Z:", gradeCalculator("Z"));
console.log("Number 5:", gradeCalculator("5"));
console.log("Empty string:", gradeCalculator(""));

// Edge cases
console.log("Null input:", gradeCalculator(null));
console.log("Multiple chars:", gradeCalculator("AB"));

*/


/*

Exercise 2: Simple Calculator
Build a calculator function that takes three parameters: two numbers and an operator (+, -, *, /, %). Use a switch statement with these requirements:

Perform the correct mathematical operation based on the operator
Handle division by zero (return "Cannot divide by zero")
Return "Invalid operator" for unsupported operators
The function should work with operators passed as strings

*/

/*

// function simpleCalculator(numberOne, numberTwo, operator) {
//
//     switch (operator) {
//         case "+":
//             return numberOne + numberTwo;
//         case "-":
//             return numberOne - numberTwo;
//         case "*":
//             return numberOne * numberTwo;
//         case "/":
//             if (numberTwo === 0)
//                 return "Cannot divide by zero";
//             return numberOne / numberTwo;
//         case "%":
//             if (numberTwo === 0)
//                 return "Cannot divide by zero";
//             return numberOne % numberTwo;
//         default:
//             return "Invalid operator";
//     }
// }

function simpleCalculator(numberOne, numberTwo, operator) {

    if ((operator === "/" || operator === "%") && numberTwo === 0)
        return "Cannot divide by zero";

    switch (operator) {
        case "+":
            return numberOne + numberTwo;
        case "-":
            return numberOne - numberTwo;
        case "*":
            return numberOne * numberTwo;
        case "/":
            return numberOne / numberTwo;
        case "%":
            return numberOne % numberTwo;
        default:
            return "Invalid operator";
    }
}


// Test cases for Exercise 2: Simple Calculator

console.log("=== Simple Calculator Tests ===");

// Test basic operations
console.log("5 + 3 =", simpleCalculator(5, 3, "+"));
console.log("10 - 4 =", simpleCalculator(10, 4, "-"));
console.log("7 * 6 =", simpleCalculator(7, 6, "*"));
console.log("15 / 3 =", simpleCalculator(15, 3, "/"));
console.log("17 % 5 =", simpleCalculator(17, 5, "%"));

// Test with decimals
console.log("2.5 + 1.5 =", simpleCalculator(2.5, 1.5, "+"));
console.log("10.8 / 2.4 =", simpleCalculator(10.8, 2.4, "/"));

// Test division by zero
console.log("8 / 0 =", simpleCalculator(8, 0, "/"));
console.log("5 % 0 =", simpleCalculator(5, 0, "%"));

// Test invalid operators
console.log("5 ^ 2 =", simpleCalculator(5, 2, "^"));
console.log("4 & 3 =", simpleCalculator(4, 3, "&"));
console.log("Empty op:", simpleCalculator(1, 2, ""));

// Test with negative numbers
console.log("-5 + 3 =", simpleCalculator(-5, 3, "+"));
console.log("8 * -2 =", simpleCalculator(8, -2, "*"));

*/

/*

Exercise 3: Traffic Light System
Create a function that simulates a traffic light system. It should take the current light color and return the next action. Requirements:

"red" → "Stop! Wait for green light"
"yellow" or "amber" → "Caution! Light is changing"
"green" → "Go! Drive safely"
Any other input → "Traffic light malfunction - proceed with caution"
Handle both cases where yellow and amber should produce the same result

*/


function trafficLightSystem (currentLightColor) {

    if (currentLightColor === "amber")
        currentLightColor = "yellow";

    if (typeof currentLightColor === "string")
        currentLightColor = currentLightColor.toLowerCase();

    switch (currentLightColor) {
        case "red":
            return "Stop! Wait for green light";
        case "yellow":
        // case "amber":
            return "Caution! Light is changing";
        case "green":
            return "Go! Drive safely";
        default:
            return "Traffic light malfunction - proceed with caution";
    }
}

// Test cases for Exercise 3: Traffic Light System

console.log("=== Traffic Light System Tests ===");

// Test basic light colors
console.log("Red light:", trafficLightSystem("red"));
console.log("Green light:", trafficLightSystem("green"));
console.log("Yellow light:", trafficLightSystem("yellow"));
console.log("Amber light:", trafficLightSystem("amber"));

// Test uppercase variations
console.log("RED light:", trafficLightSystem("RED"));
console.log("GREEN light:", trafficLightSystem("GREEN"));
console.log("YELLOW light:", trafficLightSystem("YELLOW"));

// Test mixed case
console.log("Red light:", trafficLightSystem("Red"));
console.log("Green light:", trafficLightSystem("Green"));
console.log("Yellow light:", trafficLightSystem("Yellow"));

// Test invalid inputs
console.log("Blue light:", trafficLightSystem("blue"));
console.log("Purple light:", trafficLightSystem("purple"));
console.log("Empty string:", trafficLightSystem(""));
console.log("Number input:", trafficLightSystem(123));
console.log("Null input:", trafficLightSystem(null));
