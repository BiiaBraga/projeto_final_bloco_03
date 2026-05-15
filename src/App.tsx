//importações
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import FormCategoria from './components/categorias/formcategorias/FormCategoria'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import FormProduto from './components/produtos/formproduto/FormProduto'
import DeletarProduto from './components/produtos/deletarproduto/DeletarProduto'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
                    <Route path="/produtos" element={<ListaProdutos />} />
                    <Route path="/cadastrarProduto" element={<FormProduto />} />
                    <Route path="/editarProduto/:id" element={<FormProduto />} />
                    <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
                </Routes>

                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    theme="colored"
                />
            </BrowserRouter>
        </>
    )
}

export default App