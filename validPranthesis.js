var isValid = function(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in brackets) {
            const top = stack.pop();
            if (brackets[char] !== top) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

console.log(isValid('(())'))
console.log(isValid('(}))'))