/*
    Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
*/
const addTogether = (a, b) => {
    if (a === b) {
        return a; // if a and b are equal don't add and instead return a or b
    } else {
        let sum = a;
        for (let i = a; i < b; i++) {
            sum = sum + i;
        }
        return sum;
    }
};

console.log(addTogether(3, 5));
console.log(addTogether(-3, 5));
console.log(addTogether(3, 3));
console.log(addTogether(-2, -2));
console.log(addTogether(-2, -5));