function removeElement(nums, val) {
    let k = 0; // Initialize k to count elements not equal to val
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val, update the array in place
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++; // Increment k for each element not equal to val
        }
    }
    
    return k; // Return the count of elements not equal to val
}

// Example 1
let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log(removeElement(nums1, val1)); // Output: 2
console.log(nums1); // Output: [2, 2, 2, 3]

// Example 2
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(removeElement(nums2, val2)); // Output: 5
console.log(nums2); // Output: [0, 1, 3, 0, 4, 0, 4, 2]
