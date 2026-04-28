// Write a function(s) that checks the level of nesting of an array. Then, use that function to flatten the array into a single-dimensional array.
function checkNestingLevel(arr) {
    let maxLevel = 0;
    for (let element of arr) {
        if (Array.isArray(element)) {
            const level = checkNestingLevel(element);
            if (level > maxLevel) {
                maxLevel = level;
            }
        }
    }
    return maxLevel + 1;
}

function flattenArray(arr) {
    const result = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            result.push(...flattenArray(element));
        } else {
            result.push(element);
        }
    }
    return result;
}

