/*
 * @file: findOddNumber.js
 * @description: Find odd number from an array.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Find odd number from an array with default function.
 */

function findOddNumbersUsingFilter(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log('Method 1: ', findOddNumbersUsingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
 * @description: Find odd number from an array without using default function.
 */

function findOddNumbersUsingLoop(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log('Method 2:', findOddNumbersUsingLoop([1, 2, 3, 4, 5, 6, 7, 8, 9]));
