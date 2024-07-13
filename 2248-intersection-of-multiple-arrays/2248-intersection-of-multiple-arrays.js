var intersection = function(nums) {
     let result = new Set(nums[0]);
    
    for (let i = 1; i < nums.length; i++) {
        result = new Set(nums[i].filter(x => result.has(x)));
    }
    
    return Array.from(result).sort((a, b) => a - b);
};