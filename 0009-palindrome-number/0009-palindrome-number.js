function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let revertedNumber = 0;
    let originalNumber = x;

    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}

console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false
