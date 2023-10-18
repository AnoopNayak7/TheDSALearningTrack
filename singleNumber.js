// var singleNumber = function(nums) {
//     if(nums.length == 1) return nums[0];

//     let obj = {}
//     for(let i=0; i< nums.length; i++){
//         obj[nums[i]] = (obj[nums[i]] || 0) + 1;
//     }
//     for(const key in obj){
//         if(obj[key] == 1) return key
//     }
// };

// console.log(singleNumber([2,1,1]))

// optimized code

var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(result, "<===", result ^ nums[i])
        result ^= nums[i];
    }

    return result;
};

console.log(singleNumber([2,1,1]))