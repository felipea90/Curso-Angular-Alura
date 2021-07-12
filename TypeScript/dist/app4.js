"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var Dao_1 = require("./Dao");
//let daoC: ConcessionariaDao = new ConcessionariaDao()
//let daoP: PessoaDao = new PessoaDao()
var concessionaria = new Concessionaria_1.Concessionaria('', []);
var pessoa = new Pessoa_1.Pessoa('', '');
var daoC = new Dao_1.Dao();
var daoP = new Dao_1.Dao();
daoC.Inserir(concessionaria);
daoP.Atualizar(pessoa);
