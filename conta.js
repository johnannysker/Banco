class Conta {
    constructor(titular, conta, saldo){
        this.titular = titular;
        this.conta = conta;
        this.saldo = saldo;
    }



    //Método sacar
    sacar(valor){
        if(valor > 0 && this.saldo >= valor){
            this.saldo -= parseFloat(valor).toFixed(2);
            console.log(`
                SAQUE: R$ ${parseFloat(valor).toFixed(2)}
                SALDO: R$ ${parseFloat(this.saldo).toFixed(2)}
                ***********************`)
        }else{
            console.log("Saldo insuficiente!");
        }

    }
    

}

module.exports = Conta;