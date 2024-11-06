// DECORATORS
// Decorar uma função e execute uma ação em seguida. Frameworks utilizam muito.

function ExibirNome(target: any){ //Exibirá qualquer coisa, no caso apenas uma classe 'funcionario'
    console.log(target)
};

//Utilize o '@' para 'decorar' e o nome do método:
@ExibirNome

class funcionario{};
@ExibirNome // O que houver depois da sua linha de código será mostrado
class funcionario02{};