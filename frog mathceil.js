const frogJump = (X, Y, D) => {
    return Math.ceil((Y - X) / D);
}

console.log(frogJump(10, 85, 30))
console.log(frogJump(85, 5, 30))
console.log(frogJump(10, 85, 90))
console.log(frogJump(3, 999111321, 7))
console.log(frogJump(1, 5, 2))