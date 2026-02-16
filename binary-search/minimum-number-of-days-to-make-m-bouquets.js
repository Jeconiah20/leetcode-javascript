/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(m * k > bloomDay.length) return -1;

    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);

    while( left <= right){
        let mid = Math.floor((left + right) / 2);

        if(canMake(bloomDay, m, k, mid)){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
    };
    
    
    function canMake(bloomDay, m, k, mid){
        let flowers = 0;
        let boquets = 0;
        
         for(let bloom of bloomDay){
            if(bloom <= mid){
                flowers++;
                if(flowers === k){
                    boquets++;
                    flowers = 0;
                }
        }else{
            flowers = 0;
        }
    }
    return boquets >=  m;

};