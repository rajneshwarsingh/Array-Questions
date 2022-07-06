/*
 * @file: shiftElement.js
 * @description: Shift an array element to the end.
 * @author: Rajneshwar Singh (https://rajneshwar.com/)
 */

/*
 * @description: Shift an array element to the end with default function.
 */

function moveToEndWithDefault(arr, target) {
    return [...arr.filter(el => el !== target), ...arr.filter(el => el === target)];
}

console.log('Method 1:', moveToEndWithDefault([1, 2, 3, 4, 2, 5, 2, 6], 2));

/*
 * @description: Shift an array element to the end without default function.
 */

function moveToEndWithoutDefault(arr, target) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== target) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
            index++;
        }
    }
    return arr;
}

console.log('Method 2:', moveToEndWithoutDefault([1, 2, 3, 4, 2, 5, 2, 6], 2));
