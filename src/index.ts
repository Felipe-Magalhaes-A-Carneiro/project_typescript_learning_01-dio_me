//FUNÇÕES

function addNumber(x: number, y: number) : number {
    return x + y;
};

let soma : number = addNumber(3, 4);

console.log(soma);

// FUNÇÃO SIMPLES
function addToHello (name : string) : string {
    return `Hello, ${name}`;
};

// FUNÇÃO MULTI TIPOS
function CallToPhone (phone : number | string): number | string {
    return phone
};

// FUNÇÃO ASYNC
async function getDatabase(id:number): Promise<string> {
    return "Felipe";
};

console.log(addToHello("Felipe"));
console.log(CallToPhone(999999999));