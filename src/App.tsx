import './App.css'
import Transacao from './components/Transacao/Transacao'

function App() {

    return (
        <>
            <Transacao data={new Date()} saldo={10} texto='Saque' valor={100} key={1} ></Transacao>
        </>
    )
}

export default App
