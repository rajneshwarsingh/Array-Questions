/*
 * @file: merge.js
 * @description: Merge two array's.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Merge two array's with default function.
 */

function mergeWithDefault(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log('Method 1: ', mergeWithDefault([1, 2, 4, 5, 6], [7, 8, 9, 10, 11]))

/*
 * @description: Merge two array's with default function.
 */
function mergeWithDefault2(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log('Method 2: ', mergeWithDefault2([1, 2, 4, 5, 6], [7, 8, 9, 10, 11]))

/*
 * @description: Merge two array's without using default function.
 */

function mergeWithoutDefault(arr1, arr2) {
    let merged = []
    arr1.forEach(item => merged.push(item));
    arr2.forEach(item => merged.push(item));
    return merged
}
console.log('Method 3: ', mergeWithoutDefault([1, 2, 4, 5, 6], [7, 8, 9, 10, 11]));