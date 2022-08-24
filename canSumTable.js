const canSumTable = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    console.log(table);
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i+num] = true;
            }
        }
    }

    return table[targetSum];
}
console.log(canSumTable(7, [2, 4]))