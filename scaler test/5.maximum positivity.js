 //note: get idea from video explaination 
        let n = A.length;
        let start = 0;//i
        let len = 0;//j
        let max_start = 0;
        let max_size = 0;
        for (let i = 0; i < n; i++) {
            if (A[i] >= 0) {
                len++;
            }
            else {
                start = i + 1;
                len = 0;
            }
            if (len > max_size) {
                max_size = len;
                max_start = start;
            }
        }
        let ans = [];
        for (let i = max_start; i < max_start + max_size; i++) {
            ans.push(A[i]);
        }
        return ans;