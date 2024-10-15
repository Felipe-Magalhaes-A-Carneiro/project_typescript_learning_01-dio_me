type heroi = {
    name: string;
    vulgo: string;
}

function mostraObjeto(pessoa: heroi){
    console.log(pessoa);
}

mostraObjeto({
    name: "Bruce Wayne",
    vulgo: "Batman"
});
console.log("Olá, Mundo");