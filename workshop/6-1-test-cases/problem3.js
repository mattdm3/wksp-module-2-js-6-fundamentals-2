let verifyEquals = require('../../assets/verify-equals');

// Problem 3
// ---------
// Step 1
// This function expects an array of 2 numbers as input (e.g. [1,2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
// You can use the typeof function to check the type of each element (e.g. typeof 3 returns 'number')

function f(input) {
    if ((input.length > 2) && (typeof input[0] != "number")) {
        return undefined
    } else {
        return input[0] + input[1]
    }
}

// Step 2
// We need 7 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [[2, 4], [-3, 3], [0, 1], [2, 1], [5, 6], [2, 7], [0, 1], [1, 1]];
let outputs = [6, 0, 1, 3, 11, 9, 1, 2];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

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
runTest(5);
runTest(6);

console.log('All tests passed for ' + __filename);