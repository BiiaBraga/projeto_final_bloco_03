import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-5 bg-white text-red-600 shadow-sm">
                
                <div className="container flex justify-between items-center text-lg mx-8">

                    <Link 
                        to="/home" 
                        className="text-3xl font-bold hover:text-red-700 transition"
                    >
                        Farmácia
                    </Link>

                    <div className="flex gap-2 font-medium">

                        <Link 
                            to="/home" 
                            className="px-4 py-2 rounded-full hover:bg-red-100 hover:text-red-700 transition"
                        >
                            Home
                        </Link>

                        <Link 
                            to="/categorias" 
                            className="px-4 py-2 rounded-full hover:bg-red-100 hover:text-red-700 transition"
                        >
                            Categorias
                        </Link>

                        <Link 
                            to="/cadastrarCategoria" 
                            className="px-4 py-2 rounded-full hover:bg-red-100 hover:text-red-700 transition"
                        >
                            Cadastrar Categoria
                        </Link>

                        <Link 
                            to="/produtos" 
                            className="px-4 py-2 rounded-full hover:bg-red-100 hover:text-red-700 transition"
                        >
                            Produtos
                        </Link>

                        <Link 
                            to="/cadastrarProduto" 
                            className="px-4 py-2 rounded-full hover:bg-red-100 hover:text-red-700 transition"
                        >
                            Cadastrar Produto
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar