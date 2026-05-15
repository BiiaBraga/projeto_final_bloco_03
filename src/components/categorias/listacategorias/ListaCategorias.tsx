import { useEffect, useState } from "react"
import type Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import CardCategoria from "../cardcategoria/CardCategoria"
import { Link } from "react-router-dom"

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias)
        } catch (error: any) {
            alert("Erro ao buscar categorias")
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            <div className="flex justify-center w-full my-8">

                <div className="container flex flex-col mx-2">

                    <div className="flex justify-between items-center">

                        <h1 className="text-4xl text-red-600 font-bold">
                            Categorias
                        </h1>

                        <Link
                            to="/cadastrarCategoria"
                            className="rounded-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 transition"
                        >
                            Cadastrar Categoria
                        </Link>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

                        {categorias.map((categoria) => (
                            <CardCategoria
                                key={categoria.id}
                                categoria={categoria}
                            />
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}

export default ListaCategorias