import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"
import type Categoria from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Service"

function FormCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            toast.error("Erro ao buscar categoria")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        try {
            if (id !== undefined) {
                await atualizar(`/categorias`, categoria, setCategoria)
                toast.success("Categoria atualizada com sucesso!")
            } else {
                await cadastrar(`/categorias`, categoria, setCategoria)
                toast.success("Categoria cadastrada com sucesso!")
            }

            retornar()
        } catch (error: any) {
            toast.error("Erro ao salvar categoria")
        }

        setIsLoading(false)
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className="container flex flex-col mx-auto items-center my-8">

            <h1 className="text-4xl text-center my-8 text-red-600 font-bold">
                {id !== undefined ? "Editar Categoria" : "Cadastrar Categoria"}
            </h1>

            <form
                className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovaCategoria}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-red-600 font-bold">
                        Nome
                    </label>

                    <input
                        type="text"
                        placeholder="Digite o nome da categoria"
                        name="nome"
                        className="border-2 border-red-300 rounded-lg p-2"
                        value={categoria.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-red-600 font-bold">
                        Descrição
                    </label>

                    <input
                        type="text"
                        placeholder="Digite a descrição da categoria"
                        name="descricao"
                        className="border-2 border-red-300 rounded-lg p-2"
                        value={categoria.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 transition flex items-center justify-center h-14"
                >
                    {isLoading ? (
                        <ClipLoader color="#ffffff" size={24} />
                    ) : (
                        <span>
                            {id !== undefined ? "Atualizar" : "Cadastrar"}
                        </span>
                    )}
                </button>
            </form>
        </div>
    )
}

export default FormCategoria