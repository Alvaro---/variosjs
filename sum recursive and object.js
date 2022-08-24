// Currying
function sum (a) {
    return function (b) {
        return b ? sum(a+b) : a
    }
}

console.log(sum(5)(2)(3)())

// object
const calc = {
    total: 0,
    add(a) {
        this.total+=a;
        return this;
    },
    multiply(b){
        this.total*=b;
        return this;
    },
    subtract(b){
        this.total-=b;
        return this;
    },
}

const result = calc.add(10).multiply(6).subtract(30).add(10)
// const result = calc.add(15).add(5)
console.log(result.total)