import { Veiculo } from "./Veiculo"

export class Carro extends Veiculo
{
    private numeroPortas!: number

    constructor(modelo: string, numeroPortas: number)
    {
        super()
        this.modelo = modelo
        this.numeroPortas = numeroPortas
    }
}
