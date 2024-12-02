// DECORATORS
// Decorar uma função e execute uma ação em seguida. Frameworks utilizam muito.

function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];  //'_value' possuí um _ 'underline' no ínicio, isso é convenção para indicar que é um atributo privado

        const getter = () => _value;
        const setter = (value: string) =>{
            if (value.length < length){
                throw new Error(`Tamanho menor do que ${length}.`);
            } else {
                _value = value;
            };
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    };
};

//ATRIBUTE DECORATOR

class Api{

    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("Produtos");
console.log(api.name);
