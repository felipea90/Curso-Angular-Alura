"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.Inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    ConcessionariaDao.prototype.Atualizar = function (object) {
        console.log('lógica de Update');
        return true;
    };
    ConcessionariaDao.prototype.Remover = function (id) {
        console.log('lógica de Delete');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.Selecionar = function (id) {
        console.log('lógica de Select by Id');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.SelecionarTodos = function () {
        console.log('lógica de Select All');
        return [new Concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
