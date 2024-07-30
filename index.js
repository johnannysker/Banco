const prompt = require("prompt-sync")();
const ContaCorrente = require("./contaCorrente");
const contaPoupanca = require("./contaPoupanca");

//Funcão que cria um numero inteiro aleatorio entre dois numeros distintos
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Função cria Conta Corrente
function criaContaCorrente(t, s, c, ty, j){
    const novaConta = new ContaCorrente(t, s, c, ty, j);
    return novaConta;
}

//Função cria Conta poupança
function criaContaPoupanca(t, s, c, ty, r){
    const novaConta = new contaPoupanca(t, s, c, ty, r);
    return novaConta;
}

//Declaração de variaveis
let titular;
let tipo;
const numConta = getRandomInt(100001, 800000);
let minhaConta;


//Interface do usuario
while(true){
    const opcao = +prompt("DIGITE 1 PARA CRIAR A CONTA OU QUALQUER TECLA PARA SAIR: ");

    if(opcao === null || opcao !== 1){
        console.log("*** PROGRAMA FINALIZADO ***");
        break;
    }else{
        titular = prompt("Digite seu nome: ")
        
    
    }

    console.log("Digite [ 2 ] para Conta Corrente");
    console.log("Digite [ 3 ] para Conta Poupança");
    do{
        tipo = +prompt(": ");

    }while(isNaN(tipo) === true || !(tipo === 2 || tipo === 3));

    let taxa = 0;
    if(tipo === 2){
        const type = "Conta Corrente";
        //Conta corrente
        do{
            taxa = parseFloat(+prompt("Digite a taxa de juros (%): ")).toFixed(2);
        }while(isNaN(taxa) === true);
        
        minhaConta = criaContaCorrente(titular, numConta, 0, type, taxa);
        console.log("Conta Corrente Criada!");
    }else{
        
        //conta poupança
        do{
            taxa = parseFloat(+prompt("Digite a taxa de rendimento (%): ")).toFixed(2);
        }while(isNaN(taxa) === true);

        type2 = "Conta Poupança";
        minhaConta = criaContaPoupanca(titular, numConta, 0, type2, taxa)
        console.log("Conta Poupança Criada!");
    }
    
    
    
    let opc = 0;
    
    while(opc !== 7){
        console.log(`
            *** ESCOLHA UMA AÇÃO ***
                4 - DEPOSITAR
                5 - SACAR
                6 - VER EXTRATO
                7 - SAIR
                                        `);
        opc = +prompt(": ");
        if(isNaN(opc) === true || 4 > opc > 7){
            console.log("Digite uma opção válida");
        }else{
            switch(opc){
                case 4:
                    let cash = +prompt("Digite o valor do deposito: ");
                    if(isNaN(cash) === false){
                        minhaConta.depositar(parseFloat(cash).toFixed(2));

                    }else{
                        console.log("Valor inválido!");
                    }
                    break;
                case 5:
                    let money = +prompt("Digite o valor do saque: ");
                    if(isNaN(money) === false){
                        console.log(minhaConta.saldo)
                        minhaConta.sacar(parseFloat(money).toFixed(2));

                    }else{
                        console.log("Valor inválido!");
                    }
                    break;
                case 6:
                    minhaConta.getExtrato()
                    break;
            }
        }
    
    }
    
    console.log("*** CONTA FINALIZADA ***");

}

