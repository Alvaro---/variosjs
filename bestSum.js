const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let bestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            //if is the shortest than current shortest
            if (bestCombination === null || combination.length < bestCombination.length)
                bestCombination = combination
        }
    }

    return bestCombination
};

const bestSumMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let bestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            //if is the shortest than current shortest
            if (bestCombination === null || combination.length < bestCombination.length)
                bestCombination = combination
        }
    }

    memo[targetSum] = bestCombination
    return bestCombination
};


console.log(bestSumMemo(50, [5, 3, 4, 7])) //7
console.log(bestSum(8, [2, 3, 5])) //3,5