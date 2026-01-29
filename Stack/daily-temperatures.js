/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let answer = new Array(n).fill(0);
    let stack = [];

    for(i = 0; i< n; i++){

        while(
            temperatures.length> 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ){
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
};