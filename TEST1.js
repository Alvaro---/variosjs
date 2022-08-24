// Implement the "memoize" function, that caches the return value 
// depending on the input. Also, write a test suite that tests that caching
//  works as expected.

// ```
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;

const memoize = (a) => {
    return function () {
        console.log(arguments[0])

        // return a(b)
        // let result= b.reduce((a,b)=>a+b)
    }
};

const sumMemoized = memoize(sum);
const mulMemoized = memoize(mul);

console.log(sumMemoized(1, 3, 5))

console.log(mulMemoized(2, 4))

//Square Memo
const square = (a) => a * a;
const squeareMemoized = memoize(square);
console.log(squeareMemoized(5))