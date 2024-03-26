
let amount = 5; let coins = [1, 2, 5];
let dp = new Array(amount + 1).fill(0);
dp[0] = 1;

for (let coin of coins) {
    for (let j = coin; j <= amount; j++) {
        dp[j] += dp[j - coin];
    }
}
console.log(dp)
let ans = dp[amount];
console.log(ans)