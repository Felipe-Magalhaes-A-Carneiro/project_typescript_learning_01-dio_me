//FUNÇÕES

function addNumber(x: number, y: number) : number {
    return x + y;
};

let soma : number = addNumber(3, 4);

console.log(soma);

function addToHello (name : string) : string {
    return `Hello, ${name}`;
};

console.log(addToHello("Felipe"));