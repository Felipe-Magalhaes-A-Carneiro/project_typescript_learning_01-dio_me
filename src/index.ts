//FUNÇÕES

function addNumber(x: number, y: number) : number {
    return x + y;
};

let soma : number = addNumber(3, 4);

console.log(soma);

function addToHello (name : string) : string {
    return `Hello, ${name}`;
};

function CallToPhone (phone : number | string): number | string {
    return phone
};

console.log(addToHello("Felipe"));
console.log(CallToPhone(999999999));