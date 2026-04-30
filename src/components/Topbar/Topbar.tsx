import { PropsWithChildren, ReactNode } from "react";
import "./Topbar.css"

interface ITopbar {
    children: PropsWithChildren<ReactNode>;
}

export default function Topbar({ children }: ITopbar) {
    return (
        <div className="container-topbar">
            <div className="logo-topbar">
                <img src="src/assets/logo_devbank.png" alt="Logo Devbank" height={70} />
            </div>
            <div className="right-topbar">
                <div className="card-topbar">
                    <p>Nome: {localStorage.getItem("nome")}</p>
                    <p>Agência: {localStorage.getItem("agencia")}</p>
                    <p>Conta: {localStorage.getItem("conta")}</p>
                </div>
                {children}
            </div>

        </div>
    )
}