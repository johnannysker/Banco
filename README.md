##Atividade: Desenvolvimento de Sistema de Banco com JavaScript e NodeJS

Descrição da Atividade:
Nesta atividade, você será responsável por desenvolver uma aplicação simples de sistema 
bancário utilizando JavaScript com NodeJS. O objetivo é aplicar os conceitos de herança em 
objetos para criar uma estrutura de contas bancárias que incluam uma conta genérica, uma 
conta corrente e uma conta poupança.
Requisitos da Atividade:
• Configuração do Ambiente:
• Configure um ambiente NodeJS adequado para o desenvolvimento da 
aplicação.
• Instale as dependências necessárias (se houver) utilizando npm.
• Implementação das Classes:
• Classe Base - Conta:
▪ Crie uma classe Conta que deve conter os atributos básicos: titular, 
saldo.
▪ Implemente métodos básicos como depositar(valor) e 
sacar(valor).
• Classe Derivada - Conta Corrente:
▪ Crie uma classe ContaCorrente que herda da classe Conta.
▪ Adicione um atributo específico para taxa de juros: juros.
▪ Implemente um método para aplicar juros: aplicarJuros(), que 
aumenta o saldo com base na taxa de juros.
• Classe Derivada - Conta Poupança:
▪ Crie uma classe ContaPoupanca que herda da classe Conta.
▪ Adicione um atributo específico para o rendimento: rendimento.
▪ Implemente um método para aplicar rendimento: 
aplicarRendimento(), que aumenta o saldo com base no 
rendimento.
• Interação com o Usuário:
• Permita que o usuário crie uma conta, deposite, saque e veja o saldo de cada 
tipo de conta
