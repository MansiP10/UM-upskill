function isSorted(arr, index = 0) {
    // Base case: If we are at or beyond the last element, array is sorted
    if (index >= arr.length - 1) {
        return true;
    }
    
    // Check if the current element is greater than the next element
    if (arr[index] > arr[index + 1]) {
        return false;
    }
    
    // Recursive case: check the rest of the array
    return isSorted(arr, index + 1);
}

// Example usage
const arr = [1, 2, 3, 5, 4, 6, 7];
console.log(isSorted(arr)); // Output: false
