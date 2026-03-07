/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let max = 0;

    for(let i = 1; i < s.length; i++){
        let left = s.slice(0, i);
        let right = s.slice(i);

        let zeros = left.split('').filter(c => c === '0').length;
        let ones = right.split('').filter(c => c === '1').length;

        max = Math.max(max, zeros + ones);
    }
    return max;
};