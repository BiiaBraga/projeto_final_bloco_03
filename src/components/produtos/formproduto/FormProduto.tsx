import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"

import type Produto from "../../../models/Produto"
import type Categoria from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Service"

function FormProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState<Produto>({} as Produto)
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            alert("Erro ao buscar produto")
        }
    }

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias)
        } catch (error: any) {
            alert("Erro ao buscar categorias")
        }
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target

        setProduto({
            ...produto,
            [name]: name === "preco" || name === "estoque" ? Number(value) : value
        })
    }

    function atualizarCategoria(e: React.ChangeEvent<HTMLSelectElement>) {
        const categoriaSelecionada = categorias.find(
            (categoria) => categoria.id === Number(e.target.value)
        )

        if (categoriaSelecionada) {
            setCategoria(categoriaSelecionada)
        }
    }

    async function gerarNovoProduto(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        try {
            if (id !== undefined) {
                await atualizar("/produtos", produto, setProduto)
                alert("Produto atualizado com sucesso!")
            } else {
                await cadastrar("/produtos", produto, setProduto)
                alert("Produto cadastrado com sucesso!")
            }

            retornar()
        } catch (error: any) {
            alert("Erro ao salvar produto")
        }

        setIsLoading(false)
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className="container flex flex-col mx-auto items-center my-8">

            <h1 className="text-4xl text-center my-8 text-red-600 font-bold">
                {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
            </h1>

            <form
                className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovoProduto}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-red-600 font-bold">
                        Nome
                    </label>

                    <input
                        type="text"
                        placeholder="Digite o nome do produto"
                        name="nome"
                        className="border-2 border-red-300 rounded-lg p-2"
                        value={produto.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="marca" className="text-red-600 font-bold">
                        Marca
                    </label>

                    <input
                        type="text"
                        placeholder="Digite a marca do produto"
                        name="marca"
                        className="border-2 border-red-300 rounded-lg p-2"
                        value={produto.marca || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="preco" className="text-red-600 font-bold">
                        Preço
                    </label>

                    <input
                        type="number"
                        step="0.01"
                        placeholder="Digite o preço do produto"
                        name="preco"
                        className="border-2 border-red-300 rounded-lg p-2"
                        value={produto.preco || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="estoque" className="text-red-600 font-bold">
                        Estoque
                    </label>

                    <input
                        type="number"
                        placeholder="Digite a quantidade em estoque"
                        name="estoque"
                        className="border-2 border-red-300 rounded-lg p-2"
                        value={produto.estoque || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="categoria" className="text-red-600 font-bold">
                        Categoria
                    </label>

                    <select
                        name="categoria"
                        className="border-2 border-red-300 rounded-lg p-2"
                        onChange={atualizarCategoria}
                        value={produto.categoria?.id || ""}
                    >
                        <option value="" disabled>
                            Selecione uma categoria
                        </option>

                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
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

export default FormProduto