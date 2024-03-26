function countSortString(str) {
    let A = [];
    for (let i = 0; i < str.length; i++) {
        A[i] = str.charCodeAt(i);
    }

    let n = A.length;
    let k = A[0];
    for (let i = 1; i < n; i++) {
        if (k < A[i]) {
            k = A[i];
        }
    }

    let count = [];
    for (let i = 0; i <= k; i++) {
        count[i] = 0;
    }

    let b = [];
    for (let i = 0; i < n; i++) {
        b[i] = 0;
    }

    for (let i = 0; i < n; i++) {
        count[A[i]]++;
    }
    for (let i = 1; i <= k; i++) {
        count[i] = count[i] + count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        b[--count[A[i]]] = A[i];
    }
    for (let i = 0; i < n; i++) {
        A[i] = b[i];
    }

    let sortedStr = '';
    for (let i = 0; i < n; i++) {
        sortedStr += String.fromCharCode(A[i]);
    }

    return sortedStr;
}

let inputString = "scaleracademy";
let sortedString = countSortString(inputString);
console.log(sortedString);  // Output: " dehllloorw"
