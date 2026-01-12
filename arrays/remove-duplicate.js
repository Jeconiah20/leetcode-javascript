/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;

    let l = 0;

    for(let r = 1; r<nums.length; r++){
        if(nums[r] !== nums[l])
        l++;
        nums[l] = nums[r];
    }
    return l + 1;
    
};