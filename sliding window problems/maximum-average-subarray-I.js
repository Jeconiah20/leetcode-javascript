/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
   let sum = 0;

// first define the window 
   for ( let i = 0; i<k; i++){
    sum += nums[i];
   }

   let maxSum = sum;   //save the sum of window into subarray

//  this if for sliding the window
   for( i = k; i < nums.length; i++){
    sum = sum + nums[i] - nums[i - k]; // leave the previous no. of the window and add the new number 
    maxSum = Math.max(maxSum , sum); // find the max number among the sums  
   }
   return maxSum / k; 
};