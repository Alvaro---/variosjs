const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderReusult = howSum(remainder, numbers);
        if (remainderReusult !== null){
            return [...remainderReusult, num];
        }
    }

    return null;
};


//m target sum
//n numbers, length


console.log(howSum(7, [3, 2]))