import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import type Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert("Erro ao buscar categoria")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert("Categoria deletada com sucesso!")
            retornar()
        } catch (error: any) {
            alert("Erro ao deletar categoria")
        }

        setIsLoading(false)
    }

    return (
        <div className="container w-1/3 mx-auto my-8">

            <h1 className="text-4xl text-center text-red-600 font-bold">
                Deletar Categoria
            </h1>

            <p className="text-center font-semibold my-4">
                Você tem certeza que deseja apagar a categoria a seguir?
            </p>

            <div className="border border-red-300 rounded-2xl overflow-hidden shadow-md bg-white">

                <div className="p-4">
                    <h3 className="text-xl font-bold text-red-600">
                        {categoria.nome}
                    </h3>

                    <p className="text-gray-700 mt-2">
                        {categoria.descricao}
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
                        onClick={deletarCategoria}
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

export default DeletarCategoria