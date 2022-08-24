function lonely(a) {
    console.log(a);
    let unico=[]
    a.forEach(item=>{
        let counter=0;
        let newA=a.filter(x=>x===item).length
        if (newA===1)
            unico.push(item)
    })
    console.log(unico)
    console.log(unico[0])
}

lonely([3,5,8,3,5,2])