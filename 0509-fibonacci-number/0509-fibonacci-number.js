/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
    const dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        dp.push(dp[i - 1] + dp[i - 2]);
    }

    return dp[n];
};