// function create_phone_number(numbers) {
//     let str = numbers.join("");             // convert array into a string
//     let area_code = str.slice(0,3);         // create area code using the first 3 characters 
//     let mid = str.slice(3,6);               // create mid-section (4th to 6th characters)
//     let end = str.slice(6);                 // create end-section (remaining characters)
//     return `(${area_code}) ${mid}-${end}`   // format the 3 sections together
// };

// Smarter function using replace() method
function create_phone_number(numbers){
    var format = "(xxx) xxx-xxxx";              // set up the format for the tel.no.
    for(var i = 0; i < numbers.length; i++){    // loop through each character in the array
      format = format.replace('x', numbers[i]); // replace each 'x' with the character in the array
    };
    
    return format;
}


// *** TEST ***
console.log(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));