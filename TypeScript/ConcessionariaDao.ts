import { Concessionaria } from './Concessionaria';
import { DaoInterface } from './DaoInterface';

export class ConcessionariaDao implements DaoInterface
{
    nomeTabela: string = 'tb_concessionaria'

    Inserir(object: Concessionaria): boolean
    {
        console.log('lógica de insert')
        return true
    }

    Atualizar(object: Concessionaria): boolean 
    {
        console.log('lógica de Update')
        return true
    }

    Remover(id: number): Concessionaria 
    {
        console.log('lógica de Delete')
        return new Concessionaria('', [])
    }

    Selecionar(id: number): Concessionaria 
    {
        console.log('lógica de Select by Id')
        return new Concessionaria('', [])
    }

    SelecionarTodos(): [Concessionaria] 
    {
        console.log('lógica de Select All')
        return [new Concessionaria('', [])]
    }
    
}