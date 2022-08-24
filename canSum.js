const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        console.log(targetSum)
        console.log(num)
        const remainder = targetSum - num;
        console.log(remainder)
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true
        }
    }
    return false;
};

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 4, 7]))