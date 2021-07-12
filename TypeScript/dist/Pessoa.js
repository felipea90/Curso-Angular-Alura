"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.DizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.DizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.ComprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.DizerCarroAtual = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
