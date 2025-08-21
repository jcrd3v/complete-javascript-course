/*

Exercise 1: Movie Theater Access Control
Requirements:

Create a function canWatchMovie(age, hasTicket, hasParentConsent)
A person can watch if:

They're 18+ AND have a ticket, OR
They're under 18 AND have a ticket AND have parent consent


Return "Access granted" or "Access denied"
Test cases:

canWatchMovie(20, true, false) → should grant (adult with ticket)
canWatchMovie(16, true, true) → should grant (minor with ticket + consent)
canWatchMovie(16, true, false) → should deny (minor without consent)
canWatchMovie(25, false, true) → should deny (no ticket)

*/

// function canWatchMovie (age, hasTicket, hasParentConsent){
//     if (age >= 18 && hasTicket || age < 18 && hasTicket && hasParentConsent){ // && is evaluated before || (operators precedence)
//         return "Access granted";
//     } else {
//         return "Access denied";
//     }
// }

// // I like this one :D
// function canWatchMovie (age, hasTicket, hasParentConsent) {
//     if (hasTicket && (age >= 18 || hasParentConsent)){
//         return "Access granted";
//     } else {
//         return "Acces denied";
//     }
// }


// function canWatchMovie(age, hasTicket, hasParentConsent) {
//     if (hasTicket) {
//         if (age >= 18) {
//             return "Access granted";
//         } else if (hasParentConsent) {
//             return "Access granted";
//         } else {
//             return "Access denied";
//         }
//     } else {
//         return "Access denied";
//     }
// }


// console.log(canWatchMovie(20, true, false)); // → should grant (adult with ticket)
// console.log(canWatchMovie(16, true, true)); // → should grant (minor with ticket + consent)
// console.log(canWatchMovie(16, true, false)); // → should deny (minor without consent)
// console.log(canWatchMovie(25, false, true)); // → should deny (no ticket)


/*

Exercise 2: Smart Home Security System
Requirements:

Create a function checkSecurity(isOwnerHome, hasValidCode, motionDetected, isNightTime)
Alarm should trigger if:

Motion is detected AND owner is not home AND no valid code was entered, OR
Motion is detected AND it's night time AND no valid code was entered


Return "ALARM TRIGGERED!" or "System normal"
Test cases:

checkSecurity(false, false, true, false) → should trigger (motion, no owner, no code)
checkSecurity(true, false, true, false) → should be normal (owner home)
checkSecurity(false, true, true, true) → should be normal (valid code entered)
checkSecurity(false, false, true, true) → should trigger (night + motion + no code)

*/

function checkSecurity(isOwnerHome, hasValidCode, motionDetected, isNightTime) {

    if (motionDetected && isOwnerHome && hasValidCode) {
        return "ALARM TRIGGERED!";
    } else {
        return "System normal";
    }
}

console.log(checkSecurity(false, false, true, false)); // → should trigger (motion, no owner, no code)
console.log(checkSecurity(true, false, true, false)); // → should be normal (owner home)
console.log(checkSecurity(false, true, true, true)); // → should be normal (valid code entered)
console.log(checkSecurity(false, false, true, true)); // → should trigger (night + motion + no code)