import { Veiculo } from "./Veiculo"

class Moto extends Veiculo
{
    public Acelerar(): void 
    {
        this.velocidade = this.velocidade + 20
    }
}

export default Moto
