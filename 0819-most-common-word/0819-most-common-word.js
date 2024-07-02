function mostCommonWord(paragraph, banned) {
    const bannedSet = new Set(banned);

    const words = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ').split(/\s+/);

    const wordCount = new Map();

    for (const word of words) {
        if (word && !bannedSet.has(word)) {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        }
    }

    let mostCommon = '';
    let maxCount = 0;
    for (const [word, count] of wordCount) {
        if (count > maxCount) {
            mostCommon = word;
            maxCount = count;
        }
    }

    return mostCommon;
}

