function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-white text-red-600 shadow-sm">
                <div className="container flex justify-between items-center text-lg mx-8">

                    <div className="text-2xl font-bold">
                        Farmácia
                    </div>

                    <div className="flex gap-3 font-medium">
                        <div className="px-4 py-2 rounded-full hover:bg-red-100 cursor-pointer transition">
                            Categorias
                        </div>

                        <div className="px-4 py-2 rounded-full hover:bg-red-100 cursor-pointer transition">
                            Cadastrar Categoria
                        </div>

                        <div className="px-4 py-2 rounded-full hover:bg-red-100 cursor-pointer transition">
                            Produtos
                        </div>

                        <div className="px-4 py-2 rounded-full hover:bg-red-100 cursor-pointer transition">
                            Cadastrar Produto
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar