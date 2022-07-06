/*
 * @file: reverse.js
 * @description: Reverse an array.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Reverse an array with default function.
 */

function reverseWithDefault(arr) {
    return arr.reverse();
}

console.log('Method 1: ', reverseWithDefault([1, 2, 3, 4, 5]));

/*
 * @description: Reverse an array without using default function.
 */

function reverseWithoutDefault(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

console.log('Method 2: ', reverseWithoutDefault([1, 2, 3, 4, 5]));

/*
 * @description: Reverse an array without using default function and external variable
 */

function reverseInPlace(arr) {
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        [arr[i], arr[length - i - 1]] = [arr[length - i - 1], arr[i]]; // Swapping in place
    }
    return arr;
}

console.log('Method 3: ', reverseInPlace([1, 2, 3, 4, 5]));