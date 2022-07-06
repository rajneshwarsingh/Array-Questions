/*
 * @file: remove.js
 * @description: Remove an array element.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */


/*
 * @description: Remove an array element with default function.
 */

function removeWithDefault(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1)
        arr.splice(index, 1);
    return arr;
}

console.log('Method 1:', removeWithDefault([1, 2, 3, 4, 5], 2));

/*
 * @description: Remove an array element without using default function.
 */

function removeWithoutDefault(arr, element) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== element)
            newArr.push(arr[i]);
    }
    return newArr;
}

console.log('Method 2:', removeWithoutDefault([1, 2, 3, 4, 5], 2));