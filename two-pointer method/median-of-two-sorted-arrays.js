/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0, j =0;
    let prev = 0, curr = 0;
    let total = nums1.length + nums2.length;
    let mid = Math.floor(total/ 2);

    for (let k = 0; k <= mid ; k++){
        prev = curr;

        if(i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])){
            curr = nums1[i++];
        }else{
            curr = nums2[j++];
        }
        }
        if(total % 2 === 0){
            return (curr + prev) / 2;
        
    }
    return curr;
};