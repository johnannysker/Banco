const Conta = require("./conta");

class ContaCorrente extends Conta{
    constructor(titular, conta, saldo, tipo, juros){
        super(titular, conta, saldo);
        this.tipo = tipo;
        this.juros = juros;
        
    }
    
    
    
    //Calcula o valor do juros e soma ao saldo
    
    aplicarJuros(){
        const atualSaldo = this.saldo;
        const taxa = this.juros / 100;
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
            this.aplicarJuros();

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
        JUROS: **** ${this.juros}%
        SALDO: *  R$ ${parseFloat(this.saldo).toFixed(2)}
    |                             |
    -------------------------------
        `); 
    }
}

module.exports = ContaCorrente;