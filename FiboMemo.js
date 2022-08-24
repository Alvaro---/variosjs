//momeization
// js object


const fibo = (n, memo = {}) => {

    // const prueba ={
    //     a:"asd",
    //     b:"werwer"
    // }
    // console.log(prueba['a'])
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    // return fibo(n - 1) + fibo(n - 2);
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
    return memo[n];
}

console.log(fibo(50));