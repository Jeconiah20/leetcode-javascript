/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let n = s.length;
        let maxLen = 0;
        
        for (let i = 0; i < n; i++){
            let freq = new Map();

            for(let j= i; j<n; j++){
                let ch = s[j];
                freq.set(ch, (freq.get(ch) || 0) + 1);
                
                let values = Array.from(freq.values());
                let minFreq = Math.min(...values);
                let maxFreq = Math.max(...values);

                if(maxFreq === minFreq){
                    maxLen = Math.max(maxLen, j - i + 1);
                }

            }
        }
    return maxLen;
};