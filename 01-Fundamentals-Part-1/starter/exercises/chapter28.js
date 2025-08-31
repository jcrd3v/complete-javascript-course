/*

1. What type of JavaScript construct is the ternary operator?
    a) A statement
    b) An expression (THIS ONE)
    c) A declaration
    d) A loop

2. What's the syntax structure of the ternary operator?
    a) condition ? true : false (THIS ONE)
    b) condition : true ? false
    c) true ? condition : false
    d) condition ? false : true

3. Is the "else" part (after the colon) of a ternary operator optional?
    a) Yes, you can omit it
    b) No, it's mandatory (THIS ONE)
    c) Only when used in template literals
    d) Only when assigning to variables

4. Can you use ternary operators inside template literals?
    a) No, never
    b) Yes, because they're expressions (THIS ONE)
    c) Only for simple conditions
    d) Only with string values

5. What's the main advantage of ternary operators over if/else statements?
    a) They're faster to execute
    b) They can handle more complex logic
    c) They produce values and can be used where expressions are needed (THIS ONE)
    d) They're easier to read

6. Can you assign the result of a ternary operator to a variable?
    a) No, because it's a statement
    b) Yes, because it produces a value (THIS ONE)
    c) Only with let, not const
    d) Only with numbers

7. How many lines of code can you have in each part of a ternary operator?
    a) As many as you want
    b) Only one expression per part (THIS ONE)
    c) Up to 5 lines each
    d) Only function calls

8. When should you NOT use ternary operators?
    a) Never, they're always better than if/else
    b) When you need complex multi-line logic (THIS ONE)
    c) When working with strings
    d) When assigning to variables

9. Can you nest ternary operators?
    a) No, JavaScript doesn't allow it
    b) Yes, but it can hurt readability (THIS ONE)
    c) Only two levels deep
    d) Only in template literals

10. What will this code output: console.log(5 > 3 ? "big" : "small")?
    a) "small"
    b) "big" (THIS ONE)
    c) true
    d) SyntaxError

*/


/*

Exercise 1: Basic Ternary Practice
Create a program that uses ternary operators to:

Check if a number is even or odd and assign the result to a variable
Check if a person can vote (age >= 18) and display an appropriate message
Determine if it's morning (hour < 12) or afternoon/evening and greet accordingly
Use all results in console.log statements with template literals

*/

// const testedNumber = 8;
// const testedAge = 19
// const testedHour = 23;
//
// let number = testedNumber % 2 === 0 ? "even" : "odd";
// console.log(`This number is ${number}.`);
//
// let canVote = testedAge >= 18 ? "can vote" : "cannot vote";
// console.log(`This citizen ${canVote}.`);
//
// let morningAfternoonOrEvening =  testedHour < 12 ? "Good morning 🌄!"
//                                                  : testedHour < 19 ? "Good afternoon 🌇!"
//                                                      : "Good evening 🌃!";
// console.log(`${morningAfternoonOrEvening} How are you today?`);

/*

Exercise 2: Ternary in Template Literals
Write a program for a simple grading system:

Create variables for: studentName, score, passingGrade (60)
Use template literals with embedded ternary operators to display:

Pass/Fail status
Letter grade (A: 90+, B: 80+, C: 70+, D: 60+, F: below 60) - use nested ternaries
Congratulations or encouragement message

Display everything in one template literal message

*/

// let studentName = "Josué";
// let score = 92;
// const passingGrade = 60;
// let letterGrade = score >= 90 ? "A"
//                 : score >= 80 ? "B"
//                 : score >= 70 ? "C"
//                 : score >= 60 ? "D"
//                 : "F";
//
// console.log(
//     `The student ${studentName} scored ${score} points. It means the student ${score >= passingGrade ? "passes the course. Congratulations!" : "fails the course. Keep trying!"} Your letter grade is: ${letterGrade}`)


/*

Exercise 3: Multiple Conditions
Create a weather app simulator:

Create variables for: temperature, isRaining, windSpeed
Use ternary operators to determine:

Clothing recommendation (hot/warm/cold)
Activity suggestion (indoor/outdoor based on rain and wind)
Mood emoji based on weather conditions


Display a complete weather report using template literals with ternaries

*/

// let temperature = 28;
// let isRaining = true;
// let windSpeed = 15;
//
// const forClothingRecommendation = temperature >= 30 ? "hot 🥵 " : temperature >= 15 ? "warm 😎 " : "cold 🥶 ";
// const forActivitySuggestion = (isRaining === false && windSpeed <= 24) ? "outdoor" : "indoor";
//
// console.log(`Today you can realize ${forActivitySuggestion} activities. The current weather is ${temperature}. It's ${forClothingRecommendation} out there, please have this in mind so you can dress properly! ${isRaining === true ? `It's raining out there, don't forget your umbrella ☔!` : ``}`);

/*

Exercise 4: Ternary vs If/Else Comparison
Write the same logic twice to show the difference:

First: Use if/else statements to check age ranges and assign activity recommendations
Second: Rewrite the same logic using ternary operators
Compare both approaches and comment on when each is more appropriate
Include at least 3 different age categories (child, teen, adult)

*/

// let age = 14;
//
// if (age >= 18) {
//     console.log("You can go to party with your friends tonight!");
// } else if (age > 12) {
//     console.log("You can go to the swimming pool until 10pm.")
// } else  {
//     console.log("You gotta be in your room at 9pm.");
// }
//
// console.log(`You ${age >= 18 ? `can go to party with your friends tonight!` : age > 12 ? `can go to the swimming pool until 10pm.` : `gotta be in your room at 9pm.`}`);

/*

Exercise 5: Advanced Ternary Challenge
Create a mini calculator that:

Takes two numbers and an operator (+, -, *, /)
Uses nested ternary operators to perform the calculation
Handles division by zero with a ternary check
Formats the output nicely with template literals
Includes input validation using ternaries (check if operator is valid)

*/

// let numberOne = 27;
// let numberTwo = 9;
// let operator = ``;
//
// let calculation = (numberTwo === 0 && operator === "/") ? `Cannot divide by zero`
//                 : operator === "/" ? numberOne / numberTwo
//                 : operator === "*" ? numberOne * numberTwo
//                 : operator === "+" ? numberOne +  numberTwo
//                 : operator === "-" ?numberOne - numberTwo
//                 : "Invalid operator";
//
// console.log(`${calculation === `Cannot divide by zero` ? calculation : calculation === `Invalid operator` ? calculation : `The result is: ${calculation}`}`);