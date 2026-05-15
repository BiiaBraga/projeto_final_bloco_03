import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"

import type Produto from "../../../models/Produto"
import { buscar, deletar } from "../../../services/Service"

function DeletarProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState<Produto>({} as Produto)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            alert("Erro ao buscar produto")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/produtos")
    }

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)
            alert("Produto deletado com sucesso!")
            retornar()
        } catch (error: any) {
            alert("Erro ao deletar produto")
        }

        setIsLoading(false)
    }

    return (
        <div className="container w-1/3 mx-auto my-8">

            <h1 className="text-4xl text-center text-red-600 font-bold">
                Deletar Produto
            </h1>

            <p className="text-center font-semibold my-4">
                Você tem certeza que deseja apagar o produto a seguir?
            </p>

            <div className="border border-red-300 rounded-2xl overflow-hidden shadow-md bg-white">

                <div className="p-4">
                    <h3 className="text-xl font-bold text-red-600">
                        {produto.nome}
                    </h3>

                    <p className="text-gray-700 mt-2">
                        Marca: {produto.marca}
                    </p>

                    <p className="text-gray-700 mt-2">
                        Preço: R$ {Number(produto.preco).toFixed(2)}
                    </p>

                    <p className="text-gray-700 mt-2">
                        Estoque: {produto.estoque}
                    </p>

                    <p className="text-gray-700 mt-2">
                        Categoria: {produto.categoria?.nome || "Sem categoria"}
                    </p>
                </div>

                <div className="flex">
                    <button
                        className="w-full text-white bg-gray-500 hover:bg-gray-600 flex items-center justify-center py-3 transition"
                        onClick={retornar}
                    >
                        Não
                    </button>

                    <button
                        className="w-full text-white bg-red-600 hover:bg-red-700 flex items-center justify-center py-3 transition"
                        onClick={deletarProduto}
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto