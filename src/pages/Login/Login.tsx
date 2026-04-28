import "./Login.css"

import InputAPI from "../../components/InputAPI/InputAPI"
import { useState } from "react"
import Botao from "../../components/Botao/Botao"
import Documentacao from "../../components/Documentacao/Documentacao"
import { navigate } from "../../utils/navigate"

function handleLogin(url: string) {
    if (url != "https://y5klzz3x33bqv3kytn4swkcwji0vlfhw.lambda-url.us-east-1.on.aws") {
        const aviso = document.getElementById("aviso")
        const p = document.createElement("p")
        p.textContent = "Url da API incorreta"
        aviso?.appendChild(p)
        return;
    }
    return navigate("/transacoes")
}

export default function Login() {

    const [value, setValue] = useState("")
    const [fixo] = useState(true)

    return (
        <div className="container">
            <div className="container-menor">
                <Documentacao fixo={fixo} />
                <img src="src/assets/logo_devbank.png" alt="logo devbank" className="logo" />

                <InputAPI onChange={(e) => setValue(e.target.value)} value={value}></InputAPI>
                <div className="aviso" id="aviso">

                </div>
                <Botao texto="Entrar" onClick={() => handleLogin(value)}></Botao>
            </div>
        </div>
    )
}