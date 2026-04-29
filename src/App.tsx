import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Transacoes from './pages/Transacoes/Transacoes';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path="/transacoes" element={<Transacoes />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
