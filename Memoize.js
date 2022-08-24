//Primera funcion sola
const multiply = (num) => {
    return num * 10
}

const add3 = (a, b, c) => a + b + c
const addMany = (...args) => args.reduce((acc, num) => acc + num)


const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos - 1) + fib(pos - 2);

}

// console.log(multiplyBy10(10))
// console.log(multiplyBy10(10))
// console.log(multiplyBy10(10))

const memoize = (fn) => {
    const cache = {}
    return (...args) => {
        // console.log(args.toString())
        if (args.toString() in cache) {
            console.log("cache:", cache);
            return cache[args.toString()]
        }
        const result = fn(...args)
        // console.log("result", result)
        cache[args.toString()] = result
        return result
    }
}

const memoFib = memoize(fib);
console.log(memoFib(10));
console.log(memoFib(40));
console.log(memoFib(40));

//Segunda funcion, memoizada, pero no
// const memoizedMultiplyBy10 = () => {
//     const cache = {}//clousure
//     return (num) => {
//         if (num in cache) {
//             console.log("cache:", cache);
//             return cache[num];
//         }
//         const result = num * 10;
//         cache[num] = result;
//         return result
//     }
// }

// const multiplyBy10 = memoize(add3);
// console.log(multiplyBy10(10, 20, 12))
// console.log(multiplyBy10(10))
// console.log(multiplyBy10(10))
// console.log(multiplyBy10(20))