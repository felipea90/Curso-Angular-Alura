import { DaoInterface } from './DaoInterface';
import { Pessoa } from './Pessoa';

export class PessoaDao implements DaoInterface
{
    nomeTabela: string = 'tb_Pessoa'

    Inserir(object: Pessoa): boolean
    {
        console.log('lógica de insert')
        return true
    }

    Atualizar(object: Pessoa): boolean 
    {
        console.log('lógica de Update')
        return true
    }

    Remover(id: number): Pessoa 
    {
        console.log('lógica de Delete')
        return new Pessoa('', '')
    }

    Selecionar(id: number): Pessoa 
    {
        console.log('lógica de Select by Id')
        return new Pessoa('', '')
    }

    SelecionarTodos(): [Pessoa] 
    {
        console.log('lógica de Select All')
        return [new Pessoa('', '')]
    }
    
}