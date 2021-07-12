import { Concessionaria } from './Concessionaria';
import { Carro } from "./Carro"
import Moto from "./Moto"

let carro = new Carro('Ford Ranger', 4)
carro.Acelerar()
carro.Acelerar()

let moto = new Moto()
moto.Acelerar()
moto.Acelerar()

let concessionaria = new Concessionaria('', [])

console.log(carro)
console.log()
console.log(moto)
console.log()
console.log(concessionaria.FornecerHorarioFuncionario())
