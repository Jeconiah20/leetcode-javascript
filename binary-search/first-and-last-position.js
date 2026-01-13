/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findFirst(){
        let left = 0, right = nums.length-1;
        let pos = -1;

        while(left <= right){
            mid = Math.floor((left + right) / 2);
           
            
            if(nums[mid] === target){
                pos = mid;
                 right = mid - 1;
            }else if(nums[mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return pos;
        
    }

     function findLast(){
        let left = 0, right = nums.length-1;
        let pos = -1;

        while(left <= right){
            mid = Math.floor((left + right) / 2);
           
            
            if(nums[mid] === target){
                pos = mid;
                 left = mid + 1;
            }else if(nums[mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return pos;
        
    }
    return[findFirst(), findLast()];
};