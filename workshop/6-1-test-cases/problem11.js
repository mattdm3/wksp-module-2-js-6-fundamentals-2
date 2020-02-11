let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    let count = 0;
    if (arr === []) {
        return 0;
    } else {
        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                count = count + arr[i];
            }
        }
    }
    return count;
}

// Test cases
let inputs = [[1, 2], [2, 3], [3, 4], [8, 2], [4, 3], [7, 4, 4], ["hello", 3, 3]];
let outputs = [3, 5, 7, 10, 7, 15, 6];

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
