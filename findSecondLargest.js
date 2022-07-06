/*
 * @file: findSecondLargest.js
 * @description: Find second largest element from an array.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Find second largest element from an array with default function.
 */

function findSecondLargestUsingSort(arr) {
    if (arr.length < 2) return null;
    let sortedArr = [...new Set(arr)].sort((a, b) => b - a);
    return sortedArr.length > 1 ? sortedArr[1] : null;
}

console.log('Method 1:', findSecondLargestUsingSort([10, 20, 4, 45, 99]));

/*
 * @description: Find second largest element from an array without using default function.
 */

function findeSecondLargest(arr) {
    let largest, second = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];
        }
    }
    return second;
}

console.log('Method 2:', findeSecondLargest([10, 20, 4, 45, 99]));
