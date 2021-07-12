import { Carro } from "./Carro"

export class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro!: Array<Carro>

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public DizerNome(): string {
        return this.nome
    }

    public DizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public ComprarCarro(carro: any): void {
        this.carro = carro
    }

    public DizerCarroAtual(): any {
        return this.carro
    }

}