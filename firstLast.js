const firstAndLast = (A, target) => {
    const position1 = A.indexOf(target)
    if (position1 === -1) return [-1, -1]
    let position2 = A.reverse().indexOf(target);
    position2 = A.length - position2 - 1;
    console.log(position1)
    console.log(position2)

    return [position1, position2]
}

console.log(firstAndLast([2, 4, 5, 5, 5, 5, 7, 8, 9, 5], 3))