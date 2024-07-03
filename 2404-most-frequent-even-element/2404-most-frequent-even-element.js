

function mostFrequentEven(nums) {
    const frequency = new Map();

    for (const num of nums) {
        if (num % 2 === 0) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }
    }

    if (frequency.size === 0) {
        return -1; 
    }

    let maxFreq = 0;
    let result = -1;
    for (const [num, freq] of frequency.entries()) {
        if (freq > maxFreq || (freq === maxFreq && num < result)) {
            maxFreq = freq;
            result = num;
        }
    }

    return result;
}

