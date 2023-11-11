var divide = function(dividend, divisor) {
    return (dividend === 1 || dividend === -1) ? dividend / divisor : (dividend < divisor ? 0 : Math.trunc(dividend / divisor));
};

console.log(divide(1, 2)); // Returns 0
