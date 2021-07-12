import { ConcessionariaInterface } from './ConcessionariaInterface';
import { Carro } from "./Carro"

export class Concessionaria implements ConcessionariaInterface
{
    private endereco!: string
    private listaCarros: any

    constructor(endereco: string, listaCarros: Array<Carro>)
    {
        this.endereco = endereco
        this.listaCarros = listaCarros
    }

    FornecerHorarioFuncionario(): string 
    {
        return 'Segunda a Sexta das 08h00 as 18h00 e Sábado das 08h00 as 12h00'
    }

    public FornecerEndereco(): string 
    {
        return this.endereco
    }

    public MostrarListaCarros(): Array<Carro> 
    {
        return this.listaCarros
    }
}