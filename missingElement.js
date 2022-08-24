const missingElement = (A) => {
    let missingElement = 1;
    A.sort((a,b)=>a-b);
    console.log(A)
    
    for (let i=0;i<A.length;i++){
        console.log(i+1,":",A[i])
        if (i+1!==A[i]){
            missingElement=i+1;  
            return missingElement
        }
    }


    return (A.length+1)

}

console.log(missingElement([2,3,4,5,6,7,1]))