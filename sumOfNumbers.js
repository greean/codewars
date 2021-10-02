/*
    Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
*/
const addTogether = (a, b) => {
    if (a === b) {                          // if a and b are equal don't add and instead return a or b
        return a;
    } else if (b < a) {                     // if a is greater than b
        let revSum = 0;
        for (let i = b; i <= a; i++) {
            revSum = revSum + i;
        }
        return revSum;
    } else {                                // else when a is less than b
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum = sum + i;
            // console.log(`Sum = ${sum}`);
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