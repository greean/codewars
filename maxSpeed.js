let s = 15;
let x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
let distArray = [];

for (i = 1; i < x.length; i++){
    distArray[i-1] = x[i] - x[i-1];
};

let max = Math.max(...distArray);
let maxDPH = ((3600 * max) / s);

// console.log(x.length);
// console.log(distArray);
console.log(max);
console.log(Math.floor(maxDPH));


