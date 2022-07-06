/*
 * @file: sort.js
 * @description: Sort an array.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Sort an array with default function.
 */

function sortWithDefault(arr) {
    return arr.sort((a, b) => a - b);
}

console.log('Method 1: ', sortWithDefault([1, 6, 4, 3, 4, 5]));

/*
 * @description: Sort an array without using default function.
 */

function sortWithoutDefault(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log('Method 2: ', sortWithoutDefault([1, 6, 4, 3, 4, 5]));

/*
 * @description: Sort an array decending order without default function.
 */

function sortWithoutDefault2(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log('Method 3: ', sortWithoutDefault2([1, 6, 4, 3, 4, 5]));