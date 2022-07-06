/*
 * @file: findDuplicate.js
 * @description: Find duplicate elements from an array.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Find duplicate elements from an array with default function.
 */

function findDuplicateWithDefault(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log('Method 1: ', findDuplicateWithDefault([1, 2, 3, 4, 2, 3, 5]));

/*
 * @description: Find duplicate elements from an array without using default function.
 */

function findDuplicateWithoutDefault(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i]))
                duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

console.log('Method 2:', findDuplicateWithoutDefault([1, 2, 3, 4, 2, 3, 5]));

/*
 * @description: Find duplicate elements from an array without using default function and external variable.
 */

function findDuplicateInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log('Method 3:', arr[i]); // Printing duplicate directly
                break; // Avoid multiple prints for the same duplicate
            }
        }
    }
}

findDuplicateInPlace([1, 2, 3, 4, 2, 3, 5])