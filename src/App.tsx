import Transacao from "./components/Transacao/Transacao"

function App() {

    return (
        <>
            <Transacao saldo={10} data={new Date()} texto="Saque" valor={100}></Transacao>
        </>
    )
}

export default App
