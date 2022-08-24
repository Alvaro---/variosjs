const menorResta = (A) => {
    let B = [];
    let C = [];
    let adelante=0;
    let atras=0;
    for (let i = 0; i < A.length; i++) {
        adelante=adelante+A[i]
        B.push(adelante)

        atras=atras+A[A.length-1-i]
        C.push(atras)

    }
    console.log(B)
    console.log(C)

    let restas=[]
    for (let p=0;p<B.length-1;p++){
        console.log(`${B[p]}-${C[B.length-2-p]}`)
        let resta=B[p]-C[B.length-2-p]
        restas.push(Math.abs(resta))
    }

    console.log(restas)
    return (Math.min(...restas))
}

console.log(menorResta([3,1,2,4,3]))