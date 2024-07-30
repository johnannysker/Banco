const Conta = require("./conta");

class contaPoupanca extends Conta{
    constructor(titular, conta, saldo, tipo, rendimento){
        super(titular, conta, saldo);
        this.tipo = tipo;
        this.rendimento = rendimento;

    }

    //Calcula o valor do rendimento e soma ao saldo
    
    aplicarRendimento(){
        const atualSaldo = this.saldo;
        const taxa = this.rendimento / 100;
        const rendimento = atualSaldo * taxa;
        this.saldo += rendimento;
            
        console.log(`
            ACRESCIMO:  R$ ${parseFloat(rendimento).toFixed(2)}
            NOVO SALDO: R$ ${parseFloat(this.saldo).toFixed(2)}`)
    }


    //Método depositar
    depositar(valor) {
    
        if(valor > 0 && isNaN(valor) === false){
            let sld = parseFloat(this.saldo);
            this.saldo = sld + valor;
            console.log(`
                DEPOSITO: R$ ${parseFloat(valor).toFixed(2)}
                SALDO: R$ ${parseFloat(this.saldo).toFixed(2)}`);
            this.aplicarRendimento();

        }else{
            console.log("Erro de dados!");
        }
    }

    getExtrato(){
       console.log(`
    _______________________________ 
    |                             |
            *** EXTRATO ***
     
        TITULAR: ** ${this.titular}
        CONTA: **** ${this.conta}
        TIPO: ***** ${this.tipo}
        RENDIMENTO: **** ${this.rendimento}%
        SALDO: *  R$ ${parseFloat(this.saldo).toFixed(2)}
    |                             |
    -------------------------------
        `); 
    }


}

module.exports = contaPoupanca;