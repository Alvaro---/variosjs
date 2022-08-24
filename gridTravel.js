const gridTravel = (m, n, memo = {}) => {
    //are the arguments in memo?
    const key = m + ',' + n; //need sepaate arguments
    if (key in memo) return memo[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n == 0) return 0;
    
    // return gridTravel(m - 1, n) + gridTravel(m, n - 1);
    memo[key] = gridTravel(m - 1, n) + gridTravel(m, n - 1);
    return memo[key]
}

console.log(gridTravel(10, 10))