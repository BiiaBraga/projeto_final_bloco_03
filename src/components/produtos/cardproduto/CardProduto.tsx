import { Link } from "react-router-dom"
import type Produto from "../../../models/Produto"

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
    return (
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
                <Link
                    to={`/editarProduto/${produto.id}`}
                    className="w-full text-white bg-red-500 hover:bg-red-600 flex items-center justify-center py-2 transition"
                >
                    Editar
                </Link>

                <Link
                    to={`/deletarProduto/${produto.id}`}
                    className="w-full text-red-700 bg-red-100 hover:bg-red-200 flex items-center justify-center py-2 transition"
                >
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardProduto