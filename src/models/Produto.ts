import type Categoria from "./Categoria"

export default interface Produto {
    id: number
    nome: string
    marca: string
    preco: number
    estoque: number
    categoria: Categoria | null
}