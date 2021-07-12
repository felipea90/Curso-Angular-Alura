import { Carro } from "./Carro"
import { Concessionaria } from "./Concessionaria"
import { Pessoa } from "./Pessoa"

/* -- Criar Carros -- */

let carroA = new Carro('Fiat Cronos', 4)
let carroB = new Carro('Ford Fiesta', 4)
let carroC = new Carro('Hyundai Veloster', 3)

/* -- Montar Lista de Carros -- */

//let listaCarros: Array<Carro> = [carroA, carroB, carroC]
let listaCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Rua Samrais', listaCarros)

/* -- Exibir Lista de Carros -- */

console.log(concessionaria.MostrarListaCarros())
console.log()

/* -- Comprar o Carro -- */

let pessoa = new Pessoa('Felipe', 'Fiat Cronos')

console.log(pessoa.DizerCarroPreferido())
console.log()

concessionaria.MostrarListaCarros().map((carro: Carro) => {
    
    if (carro['modelo'] == pessoa.DizerCarroPreferido()) {

        /* Comprar o Carro */ 
        pessoa.ComprarCarro(carro)
    }
})

console.log(pessoa.DizerCarroAtual())
