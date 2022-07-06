/*
 * @file: sum.js
 * @description: Sum an array elements.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Sort an array with default function.
 */

function sumWithDefault(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

console.log('method 1: ', sumWithDefault([1, 2, 3, 4, 5]));

/*
 * @description: Sum an array with default function.
 */

function sumWithoutDefault(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log('method 2: ', sumWithoutDefault([1, 2, 3, 4, 5]));
