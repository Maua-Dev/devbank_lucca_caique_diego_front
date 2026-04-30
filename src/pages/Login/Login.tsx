import "./Login.css"

import InputAPI from "../../components/InputAPI/InputAPI"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Botao from "../../components/Botao/Botao"
import Documentacao from "../../components/Documentacao/Documentacao"
import { get } from "../../services/api"

export default function Login() {
    const [value, setValue] = useState("")
    const [fixo] = useState(true)
    const navigate = useNavigate()

    async function getUser(url: string) {
        sessionStorage.setItem("URL_API", url);
        try {
            const user = await get();
            localStorage.setItem("saldo", user.current_balance);
            localStorage.setItem("nome", user.name);
            localStorage.setItem("agencia", user.agency);
            localStorage.setItem("conta", user.account);
        } catch (erro) {
            console.error(erro);
            localStorage.setItem("saldo", "0");
        }
    }

    async function handleLogin(url: string) {
        if (url != "https://y5klzz3x33bqv3kytn4swkcwji0vlfhw.lambda-url.us-east-1.on.aws") {
            const p = document.getElementById("p-aviso");
            if (p) {
                p.innerHTML = "URL da API incorreta!"
            }
            return;
        }
        await getUser(url);
        navigate("/home")
    }

    return (
        <div className="container">
            <div className="container-menor">
                <Documentacao fixo={fixo} />
                <img src="src/assets/logo_devbank.png" alt="logo devbank" className="logo" />

                <InputAPI onChange={(e) => setValue(e.target.value)} value={value}></InputAPI>
                <p className="p-aviso" id="p-aviso"></p>
                <Botao texto="Entrar" onClick={() => handleLogin(value)}></Botao>
            </div>
        </div>
    )
}