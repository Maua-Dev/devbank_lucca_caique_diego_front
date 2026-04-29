import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Transacoes from './pages/Transacoes/Transacoes';
import Login from './pages/Login/Login';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path="/transacoes" element={<Transacoes />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
