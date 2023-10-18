var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }

    let left = 1;
    let right = x;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};

console.log(mySqrt(4))