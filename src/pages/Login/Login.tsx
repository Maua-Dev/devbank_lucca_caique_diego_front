import "./Login.css"

import InputAPI from "../../components/InputAPI/InputAPI"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Botao from "../../components/Botao/Botao"
import Documentacao from "../../components/Documentacao/Documentacao"
import { Users } from "../../mock/User"

export default function Login() {

    const [value, setValue] = useState("")
    const [fixo] = useState(true)
    const navigate = useNavigate()

    function handleStorage(value: string): void {
        localStorage.setItem("saldo", "1000");
        localStorage.setItem("nome", Users.user1.nome);
        localStorage.setItem("agencia", Users.user1.agencia);
        localStorage.setItem("conta", Users.user1.conta);
        sessionStorage.setItem("URL_API", value)
    }

    function handleLogin(url: string) {
        if (url != "https://y5klzz3x33bqv3kytn4swkcwji0vlfhw.lambda-url.us-east-1.on.aws") {
            const p = document.getElementById("p-aviso");
            if (p) {
                p.innerHTML = "URL da API incorreta!"
            }
            return;
        }
        navigate("/home")
    }

    return (
        <div className="container">
            <div className="container-menor">
                <Documentacao fixo={fixo} />
                <img src="src/assets/logo_devbank.png" alt="logo devbank" className="logo" />

                <InputAPI onChange={(e) => setValue(e.target.value)} value={value}></InputAPI>
                <p className="p-aviso" id="p-aviso"></p>
                <Botao texto="Entrar" onClick={() => { handleLogin(value); handleStorage(value) }}></Botao>
            </div>
        </div>
    )
}