const canConstruct = (target, wordBank) => {
    if (target === '') return true;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) { //Si esa palabra existe en la primera posicion de la palabra target
            const suffix = target.slice(word.length)//Word.length por que es lo que viene despues de esa cantidad de letras
            if (canConstruct(suffix, wordBank) === true){
                return true
            }
        }
    }
    return false

}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abdc']))