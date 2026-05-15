//importações
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import FormCategoria from './components/categorias/formcategorias/FormCategoria'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/categorias" element={<ListaCategorias />} />
                    <Route path="/cadastrarCategoria" element={<FormCategoria />} />
                    <Route path="/editarCategoria/:id" element={<FormCategoria />} />
                    <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                    <Route path="/produtos" element={<h1>Produtos</h1>} />
                    <Route path="/cadastrarProduto" element={<h1>Cadastrar Produto</h1>} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App