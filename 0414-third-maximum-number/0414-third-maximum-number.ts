function thirdMax(nums: number[]): number {
    const uniqueNums = [...new Set(nums)].sort((a, b) => b - a);
    return uniqueNums.length < 3 ? uniqueNums[0] : uniqueNums[2]; 
};