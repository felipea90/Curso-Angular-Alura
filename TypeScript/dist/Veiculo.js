"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    Veiculo.prototype.Acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Veiculo.prototype.Parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.VelocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
