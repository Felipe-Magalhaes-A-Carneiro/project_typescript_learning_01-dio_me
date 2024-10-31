// INTERFACES

//Comparação entre type e interface:
type robot = {
    readonly filiacao : string, //Propriedade 'readonly': não permite alteração. Um usuário não poderia alterar ser valor, por exemplo.
    id: number | string;
    name: string;
};

interface robot2 {
    id: number | string;
    name: string;
};

const bot : robot = { //herdou 'type'
    filiacao: "Bem.",
    id: "1",
    name: "Otimus Prime"
}

const bot2 : robot2 = { //herdou 'interface'
    id: 2,
    name: "Megatron",
};

console.log(bot, bot2);