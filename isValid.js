const isValid = (str = '') => {
    const map = new Map();
    map.set('{', '}');
    map.set('(', ')');
    map.set('[', ']');
    console.log(map)
    const b = [];
    for (let i = 0; i < str.length; i++) {
        console.log("value in string ", i, " : ", str[i])
        if (map.has(str.charAt(i))) {
            b.push(str.charAt(i));
            console.log("has ", b)
        } else {
            //Si no se vuelve a abrir otro signo
            let pop = b.pop();
            // Debe ir cerrando desde el ultimo que se abrio.
            if (map.get(pop) !== str.charAt(i)) return false
        };
    };
    return b.length === 0;
};

const str = "([]{})";
console.log(isValid(str));