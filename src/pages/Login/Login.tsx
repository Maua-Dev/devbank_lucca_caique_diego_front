import "./Login.css"

import InputAPI from "../../components/InputAPI/InputAPI"
import { useState } from "react"
import Botao from "../../components/Botao/Botao"
import Documentacao from "../../components/Documentacao/Documentacao"

export default function Login() {

    const [value, setValue] = useState("")
    const [fixo] = useState(true)

    return (
        <div className="container">
            <div className="container-menor">
                <Documentacao fixo={fixo} />
                <img src="src/assets/logo_devbank.png" alt="logo devbank" className="logo" />

                <InputAPI onChange={(e) => setValue(e.target.value)} value={value}></InputAPI>
                <Botao texto="Entrar"></Botao>
            </div>
        </div>
    )
}