//importações
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/categorias" element={<h1>Categorias</h1>} />
                    <Route path="/cadastrarCategoria" element={<h1>Cadastrar Categoria</h1>} />
                    <Route path="/produtos" element={<h1>Produtos</h1>} />
                    <Route path="/cadastrarProduto" element={<h1>Cadastrar Produto</h1>} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App