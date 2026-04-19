import './App.css'
import Cedula from './components/Cedula/Cedula'

function App() {

    return (
        <>
            <Cedula valor={2}></Cedula>
            <Cedula valor={5}></Cedula>
            <Cedula valor={10}></Cedula>
            <Cedula valor={20}></Cedula>
            <Cedula valor={50}></Cedula>
        </>
    )
}

export default App
