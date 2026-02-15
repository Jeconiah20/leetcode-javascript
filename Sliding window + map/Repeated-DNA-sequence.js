/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const seen = new Set();
    const repeated = new Set();

    for(let i = 0; i <= s.length - 10; i++){
        let substring = s.substring(i, i + 10);

        if(seen.has(substring)){
            repeated.add(substring);
        }else{
            seen.add(substring);
        }
    }
    return Array.from(repeated);
};