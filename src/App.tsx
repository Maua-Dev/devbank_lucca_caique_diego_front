import { useState } from 'react'
import './App.css'
import InputAPI from './components/InputAPI/InputAPI'
import { FaPencilAlt } from "react-icons/fa";

function App() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [text, setText] = useState("")

    return (
        <>
            <InputAPI onChange={(e) => setText(e.target.value)} value='https://y5klzz3x33bqv3kytn4swkcwji0vlfhw.lambda-url.us-east-1.on.aws'><button><FaPencilAlt /></button></InputAPI>
            <InputAPI onChange={(e) => setText(e.target.value)} value=''></InputAPI>
        </>
    )
}

export default App
