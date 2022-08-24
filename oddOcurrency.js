const oddOcurrence = (A) => {
    let odd = A[0];
    console.log(odd)

    let countMap = {};
    for (let i = 0; i < A.length; i++) {
        let element = A[i]
        countMap[element] = (countMap[element] || 0) + 1
        console.log(countMap)
    }
    for (element in countMap){
        //console.log(element) // The value. 
        //console.log(countMap[element]) // The name of the element
        if (countMap[element]%2!==0)
        { 
            console.log(`${element} : ${countMap[element]}`)
            odd=element
        }
        
    }

    return odd;

}

console.log(oddOcurrence([5, 2, 1, 1, 5, 2, 3]))