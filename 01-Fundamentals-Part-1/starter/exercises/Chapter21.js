/* ==================================================================================== */

// Exercise 1: User Input Validator
// Requirements:

// Create a function validateUserInput(username, email, age)
// The function should return true only if ALL three parameters are truthy
// If any parameter is falsy, return false
// Test it with various combinations including: empty strings, 0, null, undefined, and valid values
// Console log whether each test case passes or fails

/*
function validateUserInput (username, email, age) {
    if (username && email && age) {
        return true;
    } else {
        return false;
    }
}

All truthy
const username = 'hola';
const email = 'a@w.com';
const age = 27;

All falsy or one at least
const username = '';
const email = 'a@w.com';
const age = null;

console.log(validateUserInput(username, email, age));
*/

/* ==================================================================================== */

// Exercise 2: Shopping Cart Calculator
// Requirements:

// Create a function calculateTotal(price, quantity, discount)
// If price or quantity are falsy, return "Invalid input"
// If discount is falsy, treat it as 0 (no discount)
// Calculate: total = (price * quantity) - discount
// Test with cases like: calculateTotal(0, 5, 10), calculateTotal(20, '', 5), calculateTotal(15, 3), etc.

/*
function calculateTotal(price, quantity, discount) {
    if (!price || !quantity){ // 0 -> falsy (false) then !0 -> true, in other words if the negation of the falsy is true then we return Invalid input, weird but works
        return "Invalid input";
    } else if (!discount){
        discount = 0;
    }
    return (price * quantity) - discount ;
}

// AI solution

function calculateTotalAI(price, quantity, discount) {
    if (!price || !quantity) {
        return "Invalid input";
    }
    
    if (!discount) {
        discount = 0; // treat falsy discount as 0
    }
    
    return (price * quantity) - discount;
}

const price = 170;
const quantity = 20;
const discount = quantity * (price * 0.1);
// console.log(discount);

// console.log(calculateTotal(price, quantity, discount));

console.log(calculateTotal(18, 5, 10));
console.log(calculateTotal(20, '', 5));
console.log(calculateTotal(15, 3));

console.log(calculateTotalAI(18, 5, 10));
console.log(calculateTotalAI(20, '', 5));
console.log(calculateTotalAI(15, 3));

// let discount = 'hola';
// console.log(Boolean(typeof(discount)));
// console.log(typeof(discount));
// console.log(discount == 'string'); // doesn't work, it gives false.
*/

/* ==================================================================================== */

// Exercise 3: User Profile Display
// Requirements:

// Create a function displayProfile(name, bio, avatar, followers)
// Use logical operators and truthy/falsy evaluation to:

// Show name or "Anonymous User" if name is falsy
// Show bio or "No bio available" if bio is falsy
// Show avatar or "default-avatar.jpg" if avatar is falsy
// Show follower count, but if followers is falsy (including 0), show "New user"

// Return an object with the processed values
// Be careful with the followers count - 0 followers should still show "New user", but any positive number should show the actual count

/*

function displayProfile(name, bio, avatar, followers) {
    if (name && bio && avatar && followers) {
        return {
            name : name,
            bio: bio,
            avatar: avatar,
            followers: followers
        }
    } else {
        return {
            name : name ? name : "Anonymous User",
            bio: bio ? bio : "Not bio available",
            avatar: avatar ? avatar : "default-avatar.jpg" ,
            followers: followers ? followers : "New user"
        }
    }
}

console.log(displayProfile('Josué', 'New programmer :D', 'avatar1.jpg', 178));
console.log(displayProfile('Josué', '', 'avatar1.jpg', 178));
console.log(displayProfile('Josué', 'Javascript learner!', 'avatar1.jpg', 0));
console.log(displayProfile('', 'Javascript learner!', 'avatar1.jpg', 0));
console.log(displayProfile('', 'Javascript learner!', null, 0));
console.log(displayProfile('Josué', 'Javascript learner!', null, 0));
console.log(displayProfile('', '', null, 0));

// AI solution

function displayProfile(name, bio, avatar, followers) {
    return {
        name: name || "Anonymous User",
        bio: bio || "No bio available", 
        avatar: avatar || "default-avatar.jpg",
        followers: followers || "New user" // This handles 0 correctly!
    }
}

*/