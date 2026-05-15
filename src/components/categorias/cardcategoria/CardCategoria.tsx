import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
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
                <Link
                    to={`/editarCategoria/${categoria.id}`}
                    className="w-full text-white bg-red-500 hover:bg-red-600 flex items-center justify-center py-2 transition"
                >
                    Editar
                </Link>

                <Link
                    to={`/deletarCategoria/${categoria.id}`}
                    className="w-full text-red-600 bg-red-100 hover:bg-red-200 flex items-center justify-center py-2 transition"
                >
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria