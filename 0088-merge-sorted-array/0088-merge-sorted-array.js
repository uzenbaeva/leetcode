function merge(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let i = 0, j = 0, k = 0;

    while (i < m && j < n) {
        if (nums1Copy[i] <= nums2[j]) {
            nums1[k] = nums1Copy[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }

    while (i < m) {
        nums1[k] = nums1Copy[i];
        i++;
        k++;
    }

    while (j < n) {
        nums1[k] = nums2[j];
        j++;
        k++;
    }
}

