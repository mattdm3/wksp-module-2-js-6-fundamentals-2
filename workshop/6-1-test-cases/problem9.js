let verifyEquals = require('../../assets/verify-equals');

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS: 
//    - You'll need to use the split string method
//    - A for loop might be helpful

function f(str) {
    let array = str.split(" ");
    let word = "";
    if (str === "") {
        return "";
    } else {
        for (i = 0; i < array.length; i++) {
            if (array[i].length >= word.length) {
                word = array[i];
            }
        }

        return word;


    }

}

// Test cases
let inputs = ["hello hey morning", "hi how are you", "what is your name?", "I'm a dinosaur", "sing to me", "I like coffee", "I am hungry"];
let outputs = ["morning", "you", "name?", "dinosaur", "sing", "coffee", "hungry"];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
