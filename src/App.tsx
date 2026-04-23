import './App.css'
import Transacao from './components/Transacao/Transacao'

function App() {

    return (
        <>
             <Transacao texto ='Saque' valor={2} saldo={2}></Transacao>
        </>
    )
}

export default App
