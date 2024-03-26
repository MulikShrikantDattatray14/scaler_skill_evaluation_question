let s = ["im", "shrikant", "i", "study", "in", "the", "computer", "science", "department", "in", "sastra", "university"]
let str = '';
for (let i = 0; i < s.length; i++) {
    let word = s[i];
    for (let j = 0; j < word.length; j++) {
        str = word[j] + str;
    }
}
let ans = new Set(str).size == 26
if (ans) return 1;
else return 0;