"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
/* -- Criar Carros -- */
var carroA = new Carro_1.Carro('Fiat Cronos', 4);
var carroB = new Carro_1.Carro('Ford Fiesta', 4);
var carroC = new Carro_1.Carro('Hyundai Veloster', 3);
/* -- Montar Lista de Carros -- */
//let listaCarros: Array<Carro> = [carroA, carroB, carroC]
var listaCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Rua Samrais', listaCarros);
/* -- Exibir Lista de Carros -- */
console.log(concessionaria.MostrarListaCarros());
console.log();
/* -- Comprar o Carro -- */
var pessoa = new Pessoa_1.Pessoa('Felipe', 'Fiat Cronos');
console.log(pessoa.DizerCarroPreferido());
console.log();
concessionaria.MostrarListaCarros().map(function (carro) {
    if (carro['modelo'] == pessoa.DizerCarroPreferido()) {
        /* Comprar o Carro */
        pessoa.ComprarCarro(carro);
    }
});
console.log(pessoa.DizerCarroAtual());
