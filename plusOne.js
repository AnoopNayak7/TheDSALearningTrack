// var plusOne = function(digits) {
//     let final= parseInt(digits.join(""))+1
//     return final.toString().split('').map(Number)
// };

// console.log(plusOne([1,2,3]))


// OPTIMIZED METHOD

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        console.log("Iam inside", i)
        if (digits[i] < 9) {
            console.log("less than 9", digits[i])
            digits[i]++;
            console.log("AANOOP", digits)
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};

console.log(plusOne([1,2,3]))