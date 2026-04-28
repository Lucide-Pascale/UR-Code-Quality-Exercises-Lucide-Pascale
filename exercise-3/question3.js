// Implement a JavaScript function to find the sum of all elements in an array recursively.
function sumArray(arr) {
    if (arr.length === 0) {
        return 0; // Base case: the sum of an empty array is 0
    }
    return arr[0] + sumArray(arr.slice(1)); // Recursive case: sum the first element and the sum of the rest
}