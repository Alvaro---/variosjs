const user = {
    hello: "Saludosss...",
    saywellcome() {
        console.log(this.hello, ":)");
    }

    // Si se hace asi todo sera BBB ya que no hay bind y el this es del padre
    // saywellcome: () => {
    //     console.log(this.hello);
    // }
};

const user2 = {
    hello: "AAAA"
}

this.hello="BBB"
setTimeout(user.saywellcome, 1000) //UNDEFINEED //Si ejecuta bien, pero no ejecuta el bind, asi que busca las variables globales y muestra undefined
// setTimeout(user.saywellcome(), 1000) //Saludosss... 
//executes user.saywellcome() immediately and passes the return value to setTimeout(). but it need a functions to excecute
setTimeout(function () {user.saywellcome()}, 1000) //Saludosss...
setTimeout(user.saywellcome.bind(this), 1000) // UNDEFINNED  - BBB
setTimeout(user.saywellcome.bind(user2), 1000) // AAA
setTimeout(user.saywellcome.bind(user), 1000) // Saludosss...
// setTimeout(user.saywellcome(), 1000) //ERROR Saludosss...
