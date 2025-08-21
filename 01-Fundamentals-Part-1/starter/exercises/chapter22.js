/*

Exercise 1: Password Validator
Requirements:

Create a function validatePassword(input, correctPassword, attempts)
The function should check if input exactly matches correctPassword (use strict equality)
If attempts equals exactly 0, return "Account locked"
If password matches, return "Access granted"
If password doesn't match but attempts > 0, return "Wrong password, try again"
Test with cases like:

validatePassword("123", "123", 3)
validatePassword(123, "123", 3) ← tricky one!
validatePassword("admin", "admin", 0)
validatePassword("wrong", "admin", "0") ← another tricky one!

*/

function validatePassword(input, correctPassword, attempts) {
    // attempts = Number(attempts);
    if (attempts === 0) { 
        return "Account locked";
    } else if (input === correctPassword) {
        return "Access granted";
    } else {
        return "Wrong password, try again";
    }
}
console.log(validatePassword("123", "123", 3));
console.log(validatePassword(123, "123", 3));
console.log(validatePassword("admin", "admin", 0));
console.log(validatePassword("wrong", "admin", "0"));

/*

Exercise 2: Quiz Answer Checker
Requirements:

Create a function checkAnswer(userAnswer, correctAnswer, questionType)
If questionType is exactly "number", use strict equality (no type coercion)
If questionType is exactly "text", use strict equality
If questionType is "flexible", you can use loose equality (== is allowed here)
Return "Correct!" or "Wrong answer"
Test cases:

checkAnswer(42, 42, "number") → should work
checkAnswer("42", 42, "number") → should fail (strict)
checkAnswer("42", 42, "flexible") → should work (loose allowed)
checkAnswer("hello", "hello", "text") → should work

*/

function checkAnswer(userAnswer, correctAnswer, questionType) {
    let strictCorrectAnswer = correctAnswer === userAnswer;
    let looseCorrectAnswer = correctAnswer == userAnswer;
    if (questionType === "flexible" && looseCorrectAnswer) {
        return "Correct!";
    } else if (questionType === "text" || questionType === "number" && strictCorrectAnswer) {
        return "Correct!";
    } else {
        return "Wrong answer";
    }
}

console.log(checkAnswer(42, 42, "number")); // → should work
console.log(checkAnswer("42", 42, "number")); // → should fail (strict)
console.log(checkAnswer("42", 42, "flexible")); // → should work (loose allowed)
console.log(checkAnswer("hello", "hello", "text")); // → should work

/*

Exercise 3: User Permission System
Requirements:

Create a function checkPermission(userLevel, requiredLevel, isAdmin)
If isAdmin is exactly true (boolean), always return "Access granted"
If isAdmin is exactly "true" (string), return "Invalid admin status"
Use strict equality to compare userLevel and requiredLevel
If userLevel >= requiredLevel, return "Access granted", otherwise "Access denied"
Test with:

checkPermission(5, 3, true)
checkPermission(5, 3, "true") ← watch out for this!
checkPermission("5", 3, false) ← and this!
checkPermission(5, 5, false)

*/

function checkPermission(userLevel, requiredLevel, isAdmin) {
    let strictAdmin = isAdmin === true;
    let looseAdmin = isAdmin == "true";
    let accessGranted = userLevel === requiredLevel || userLevel >= requiredLevel;
    
    if (strictAdmin) return "Acces granted";
    else if (looseAdmin) return "Invalid admin status";

    if (accessGranted) return "Access granted";
    else return "Access denied";
}


console.log(checkPermission(5, 3, true)); // should be granted
console.log(checkPermission(3, 5, true)); // should be granted
console.log(checkPermission(5, 3, "true")); // should be invalid admin status
console.log(checkPermission("5", 3, false)); // should be denied
console.log(checkPermission(5, 5, false)); // should be granted