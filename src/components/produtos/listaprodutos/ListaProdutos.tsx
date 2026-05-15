import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import type Produto from "../../../models/Produto"
import { buscar } from "../../../services/Service"
import CardProduto from "../cardproduto/CardProduto"

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    async function buscarProdutos() {
        try {
            await buscar("/produtos", setProdutos)
        } catch (error: any) {
            alert("Erro ao buscar produtos")
        }
    }

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    return (
        <>
            <div className="flex justify-center w-full my-8">

                <div className="container flex flex-col mx-2">

                    <div className="flex justify-between items-center">

                        <h1 className="text-4xl text-red-600 font-bold">
                            Produtos
                        </h1>

                        <Link
                            to="/cadastrarProduto"
                            className="rounded-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 transition"
                        >
                            Cadastrar Produto
                        </Link>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

                        {produtos.map((produto) => (
                            <CardProduto
                                key={produto.id}
                                produto={produto}
                            />
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}

export default ListaProdutos