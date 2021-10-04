/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example:
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
*/
function solution(str) {
    for(let i = 0; i < str.length; i++){
        // Check if the character at 'i' is uppercase
        if(str[i] == str[i].toUpperCase()){
            // all characters upto, but not including, the uppercase character + a space + rest of characters
            str = `${str.slice(0,i)} ${str.slice(i)}`;
            // move 'i' on by 1 otherwise the same uppercase character will be picked up again
            i ++;
        };
    };
    return str;
}

console.log(solution('camelCasing'));           // => camel Casing
console.log(solution('camelCasingTest'));       // => camel Casing Test
console.log(solution(''));                      // => 
console.log(solution('thinkIGotThis'));         // => think I Got This