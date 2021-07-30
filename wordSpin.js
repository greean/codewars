function spinWords(string){
	// split the string into an array of words
	let words = string.split(' ');  
	let newString = "";
	// look through each word in the array...
	for (let i=0; i<words.length; i++){
	  // if the the word is longer than 5 characters... 
	  if (words[i].length >= 5){
		// split the word into an array of each character, reverse the array and join the characters back together
		words[i] = words[i].split("").reverse().join("");
	  }
	  // combine each word back into a 'sentence' adding a space after each word
	  newString = `${newString}${words[i]} `;
	}
	// remove the space that's been added at the end of the string
	newString = newString.slice(0, -1);
	return newString;
  };

// *** TESTS ***
console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));