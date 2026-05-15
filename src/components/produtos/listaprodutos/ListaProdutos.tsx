import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import type Produto from "../../../models/Produto"
import { buscar } from "../../../services/Service"
import CardProduto from "../cardproduto/CardProduto"

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const [nomeProduto, setNomeProduto] = useState<string>("")

    async function buscarProdutos() {
        try {
            await buscar("/produtos", setProdutos)
        } catch (error: any) {
            toast.error("Erro ao buscar produtos")
        }
    }

    async function pesquisarProduto() {
        try {
            if (nomeProduto.trim() === "") {
                await buscarProdutos()
            } else {
                await buscar(`/produtos/nome/${nomeProduto}`, setProdutos)
            }
        } catch (error: any) {
            toast.error("Produto não encontrado")
        }
    }

    async function limparPesquisa() {
        setNomeProduto("")
        await buscarProdutos()
    }

    useEffect(() => {
        buscarProdutos()
    }, [])

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

                    <div className="flex gap-4 mt-8">
                        <input
                            type="text"
                            placeholder="Pesquisar produto pelo nome"
                            className="w-full border-2 border-red-300 rounded-full py-3 px-6 focus:outline-none focus:border-red-500"
                            value={nomeProduto}
                            onChange={(e) => setNomeProduto(e.target.value)}
                        />

                        <button
                            className="rounded-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 transition"
                            onClick={pesquisarProduto}
                        >
                            Pesquisar
                        </button>

                        <button
                            className="rounded-full bg-red-100 hover:bg-red-200 text-red-600 py-3 px-6 transition"
                            onClick={limparPesquisa}
                        >
                            Limpar
                        </button>
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