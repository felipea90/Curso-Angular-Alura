import { DaoInterface } from './DaoInterface';

export class Dao<T> implements DaoInterface<T>
{
    nomeTabela: string = ''

    Inserir(object: T): boolean
    {
        console.log('lógica de insert')
        return true
    }

    Atualizar(object: T): boolean 
    {
        console.log('lógica de Update')
        return true
    }

    Remover(id: number): T 
    {
        console.log('lógica de Delete')
        return Object()
    }

    Selecionar(id: number): T 
    {
        console.log('lógica de Select by Id')
        return Object()
    }

    SelecionarTodos(): [T] 
    {
        console.log('lógica de Select All')
        return [Object()]
    }

}