"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
var Pessoa_1 = require("./Pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_Pessoa';
    }
    PessoaDao.prototype.Inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    PessoaDao.prototype.Atualizar = function (object) {
        console.log('lógica de Update');
        return true;
    };
    PessoaDao.prototype.Remover = function (id) {
        console.log('lógica de Delete');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.Selecionar = function (id) {
        console.log('lógica de Select by Id');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.SelecionarTodos = function () {
        console.log('lógica de Select All');
        return [new Pessoa_1.Pessoa('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
