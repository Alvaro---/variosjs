const isSameObject = (A, B) => {
    for (element in A) {
        if (A[element] !== B[element]) return false
    }
    return true
}
const anagram = (A, B) => {

    if (A.length !== B.length) return false;
    let hashA = {};
    let hashB = {};
    for (let i = 0; i < A.length; i++) {
        const charA = A[i];
        const charB = B[i];
        hashA[charA] = (hashA[charA] || 0) + 1;
        hashB[charB] = (hashB[charB] || 0) + 1;
    }
    console.log(hashA);
    console.log(hashB);
    return isSameObject(hashA, hashB);
}

console.log(anagram("danger", "garden"));