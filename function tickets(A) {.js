function tickets(A) {
    let table = Array(Math.max(...A) + 30).fill(0);
    console.log(table)
    let day = Array(Math.max(...A)).fill(0);
    for (let a of A) {
        day[a] = 1
    }
    console.log(day)

    for (let i = 0; i < table.length; i++) {
        if (!day[i]) { // Si ese dia no existe
            table[i] = table[i + 1];
        } else {
            table[i] = Math.min(2 + table[i + 1], 
                                7 + table[i + 7], 
                                25 + table[i + 30])
        }
    }

    console.log("first", table)

    return table[1]

}

tickets([1, 3, 6, 7])

