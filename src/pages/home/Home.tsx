function Home() {
    return (
        <>
            <div className="bg-red-600 flex justify-center py-20 mb-16">
                
                <div className="container grid grid-cols-2 text-white">

                    <div className="flex flex-col gap-6 items-center justify-center text-center">
                        
                        <h2 className="text-6xl font-bold leading-tight">
                            Bem-vindo à <br /> Farmácia!
                        </h2>

                        <p className="text-2xl">
                            Gerencie produtos e categorias de forma simples e organizada
                        </p>

                        <div className="flex justify-around gap-4">

                            <div className="rounded-full bg-white text-red-600 
                                            border-white border-solid border-2 
                                            py-4 px-8 text-lg font-bold 
                                            cursor-pointer hover:bg-red-100 
                                            transition">
                                Gerenciar Produtos
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/11469/11469451.png"
                            alt="Imagem Página Home"
                            className="w-1/2"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home