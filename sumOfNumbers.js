/*
    Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
*/
const addTogether = (a, b) => {
    if (a === b) {                      // if a and b are equal don't add and instead return a or b
        return a;
    } else {
        let min = Math.min(a, b);       // set the min value
        let max = Math.max(a, b);       // set the max value
        let sum = 0;                    // find the sum of numbers
        for (let i = min; i <= max; i++) {
            sum = sum + i;
        }
        return sum;
    }
};

// --- TESTS ---
console.log(addTogether(1, 0));     // => 1
console.log(addTogether(3, 1));     // => 6
console.log(addTogether(0, 1));     // => 1
console.log(addTogether(1, -1));    // => 0
console.log(addTogether(1, -2));    // => -2
console.log(addTogether(-3, 0));    // => -6