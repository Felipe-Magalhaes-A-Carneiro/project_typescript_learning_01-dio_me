// DECORATORS
// Decorar uma função e execute uma ação em seguida. Frameworks utilizam muito.

function apiVersion(version: string){
    return (target: any) =>{ // termo 'factory' função que chama outra função
        Object.assign(target.prototyoe, {__version: version})
    }
};

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api.__version);
