"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var banco = require("./banco");
var prompt = PromptSync();
console.log('    |$$$$$$$$$$$$$$$$$$$$$$$$$$$|    ');
console.log('    |~~~ BEM VINDO A GENBANK ~~~|   ');
console.log('    |$$$$$$$$$$$$$$$$$$$$$$$$$$$|\n\n\n    ');
//console.log ("\n~~~Um banco transparente e completo com produtos exclusivos para!!!~~~\n\n ")
var escolha;
do {
    escolha = Number(prompt('\n 1 - LOGIN: \n\n 2 - ABRA SUA CONTA \n\n 3 - ABRA UMA CONTA PARA SUA EMPRESA\n\n 4 - SOBRE NÓS!!! \n\nESCOLHA UMA OPÇÃO: '));
} while (escolha < 1 || escolha > 4);
// estrutura switch
switch (escolha) {
    case 1:
        {
            console.clear();
            banco();
            break;
        }
    case 2:
        {
            console.clear();
            //TODO //TODO //TODO 
            break;
        }
    case 3:
        {
            console.clear();
            //TODO //TODO //TODO     
            break;
        }
    case 4:
        {
            window.history.back();
            console.log("\n\n SOBRE NÓS // aperte enter para voltar a página principal.");
            break;
        }
}