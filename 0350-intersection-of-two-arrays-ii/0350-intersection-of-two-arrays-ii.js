function intersect(nums1, nums2) {
    const counts = {};
    const result = [];

    for (const num of nums1) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (const num of nums2) {
        if (counts[num] > 0) {
            result.push(num);
            counts[num]--;
        }
    }

    return result;
}
