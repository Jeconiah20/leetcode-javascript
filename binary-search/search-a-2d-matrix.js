/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false;

    const row = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    let right = row * cols - 1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const r = Math.floor(mid / cols);
         const c = mid % cols;
        const value = matrix[r][c];

        if( value === target){
            return true;
        }else if(value < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return false;
};