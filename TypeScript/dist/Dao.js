"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.Inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    Dao.prototype.Atualizar = function (object) {
        console.log('lógica de Update');
        return true;
    };
    Dao.prototype.Remover = function (id) {
        console.log('lógica de Delete');
        return Object();
    };
    Dao.prototype.Selecionar = function (id) {
        console.log('lógica de Select by Id');
        return Object();
    };
    Dao.prototype.SelecionarTodos = function () {
        console.log('lógica de Select All');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
