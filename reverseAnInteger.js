var reverse = function(x) {
    const arr = x.toString().split('');

    if (x >= 0) {
        const reversed = parseInt(arr.reverse().join(''));
        return reversed > 2**31 - 1 ? 0 : reversed;
    } else {
        const negArr = arr.slice(1);
        const reversed = parseInt('-' + negArr.reverse().join(''));
        return reversed < -(2**31) ? 0 : reversed;
    }
};

console.log(reverse(-123))