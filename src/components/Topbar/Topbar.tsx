import { PropsWithChildren, ReactNode } from "react";
import "./Topbar.css"

interface ITopbar {
    user: {
        nome: string;
        agencia: string;
        conta: string;
    };
    children: PropsWithChildren<ReactNode>;
}

export default function Topbar({ user, children }: ITopbar) {
    return (
        <div className="container-topbar">
            <div className="logo-topbar">
                <img src="src/assets/logo_devbank.png" alt="Logo Devbank" height={70}/>
            </div>
            <div className="right-topbar">
                <div className="card-topbar">
                    <p>Nome: {user.nome}</p>
                    <p>Agência: {user.agencia}</p>
                    <p>Conta: {user.conta}</p>
                </div>
                {children}
            </div>

        </div>
    )
}