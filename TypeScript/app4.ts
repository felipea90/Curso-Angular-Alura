import { PessoaDao } from './PessoaDao';
import { Concessionaria } from './Concessionaria';
import { ConcessionariaDao } from './ConcessionariaDao';
import { Pessoa } from './Pessoa';
import { Dao } from './Dao';

//let daoC: ConcessionariaDao = new ConcessionariaDao()
//let daoP: PessoaDao = new PessoaDao()

let concessionaria = new Concessionaria('', [])
let pessoa = new Pessoa('', '')

let daoC: Dao<Concessionaria> = new Dao<Concessionaria>();
let daoP: Dao<Pessoa> = new Dao<Pessoa>();

daoC.Inserir(concessionaria)
daoP.Atualizar(pessoa)

