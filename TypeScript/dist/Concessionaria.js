"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    Concessionaria.prototype.FornecerHorarioFuncionario = function () {
        return 'Segunda a Sexta das 08h00 as 18h00 e Sábado das 08h00 as 12h00';
    };
    Concessionaria.prototype.FornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.MostrarListaCarros = function () {
        return this.listaCarros;
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
