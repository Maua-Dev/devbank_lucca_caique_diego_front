import { useState } from 'react'
import './App.css'
import InputAPI from './components/InputAPI/InputAPI'
import { FaPencilAlt } from "react-icons/fa";

function App() {

    const [api, setApi] = useState("https://y5klzz3x33bqv3kytn4swkcwji0vlfhw.lambda-url.us-east-1.on.aws")
    const [text2, setText2] = useState("")

    return (
        <>
            <InputAPI onChange={(e) => setApi(e.target.value)} value={api} readOnly={true}><button><FaPencilAlt /></button></InputAPI>
            <InputAPI onChange={(e) => setText2(e.target.value)} value={text2}></InputAPI>
        </>
    )
}

export default App
