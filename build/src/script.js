"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var menu_1 = require("../modules/menu");
var login_1 = require("../modules/login");
var cadastro_1 = require("../modules/cadastro");
var depositar_1 = require("../modules/depositar");
var PessoaFisica_1 = require("../modules/PessoaFisica");
var dadosPessoais_1 = require("../modules/dadosPessoais");
var pagamento_1 = require("../modules/pagamento");
var extrato_1 = require("../modules/extrato");
var prompt = PromptSync();
var option = 0;
var isLogado = false;
var clientes = [];
var cliente;
var c1 = new PessoaFisica_1.PessoaFisica('Rafaele', 'Minha rua, n. 120', 998982020, 'rafaele@gmail.com', '12345678', 19782354264);
clientes.push(c1);
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
console.log('    |~~~ BEM VINDO AO GENBANK ~~~|');
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');
prompt('Pressione ENTER para ir ao menu ');
do {
    //console.clear();
    if (!isLogado) {
        //MENU LOGIN E CADASTRO
        (0, menu_1.menu)(1);
        option = Number(prompt('>> '));
        switch (option) {
            case 1:
                cliente = (0, login_1.login)(clientes);
                if (cliente != null) {
                    isLogado = true;
                }
                break;
            case 2:
                (0, cadastro_1.cadastro)(1, clientes);
                break;
            case 3:
                (0, cadastro_1.cadastro)(2, clientes);
                break;
            case 4:
                break;
            default:
                break;
        }
    }
    else {
        //TODO
        (0, menu_1.menu)(2);
        var op = Number(prompt('>> '));
        switch (op) {
            case 1:
                (0, depositar_1.depositar)(cliente);
                break;
            case 2:
                (0, pagamento_1.pagamento)(cliente);
                break;
            case 3:
                (0, extrato_1.extrato)(cliente);
                break;
            case 4:
                (0, dadosPessoais_1.dadosPessoais)(cliente);
                break;
            case 5: //SAIR
                isLogado = false;
                break;
            default: break;
        }
    }
} while (option != 4);
