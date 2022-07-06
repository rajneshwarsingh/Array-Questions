/*
 * @file: findLargestSmallest.js
 * @description: Find largest and smallest elements from an array.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Find largest and smallest elements from an array with default function.
 */

function findMinMaxUsingMath(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

console.log('Method 1: ', findMinMaxUsingMath([3, 1, 7, 5, 9]));

/*
 * @description: Find largest and smallest elements from an array without using default function.
 */

function findMinMaxUsingLoop(arr) {
    let min = arr[0], max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return { min, max };
}

console.log('Method 2: ', findMinMaxUsingLoop([3, 1, 7, 5, 9]));
