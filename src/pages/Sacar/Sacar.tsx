import { Users } from "../../mock/User";
import Topbar from "../../components/Topbar/Topbar";
import CardSaldo from "../../components/CardSaldo/CardSaldo";
import Documentacao from "../../components/Documentacao/Documentacao";
import { useNavigate } from "react-router";
import { useState } from "react";
import Cedula from "../../components/Cedula/Cedula";
import Botao from "../../components/Botao/Botao";
import "./Sacar.css"

export default function Sacar() {
    const navigate = useNavigate();
    const [valor, setValor] = useState(0);
    return (
        <div className="containerSacar">
            <Topbar user={Users.user1}>
                <Documentacao fixo={false} />
            </Topbar>
            <div className="containerSaldo">
                <CardSaldo
                    boxSide="left"
                    texto={`Quantidade sacada: R$ ${valor}`}
                    saldo={1000}
                ></CardSaldo>
            </div>
            <div className="container-cedulas">
                <div className="p-cedulas"><p>Selecione as cédulas e a quantidade que você deseja.</p></div>
                <Cedula
                    valor={2}
                    add={() => {
                        setValor(valor + 2);
                    }}
                    remove={() => setValor(valor <= 1 ? valor : valor - 2)}
                />
                <Cedula
                    valor={5}
                    add={() => {
                        setValor(valor + 5);
                    }}
                    remove={() => setValor(valor <= 4 ? valor : valor - 5)}
                />
                <Cedula
                    valor={10}
                    add={() => {
                        setValor(valor + 10);
                    }}
                    remove={() => setValor(valor <= 9 ? valor : valor - 10)}
                />
                <Cedula
                    valor={20}
                    add={() => {
                        setValor(valor + 20);
                    }}
                    remove={() => setValor(valor <= 19 ? valor : valor - 20)}
                />
                <Cedula
                    valor={50}
                    add={() => {
                        setValor(valor + 50);
                    }}
                    remove={() => setValor(valor <= 49 ? valor : valor - 50)}
                />
                <Cedula
                    valor={100}
                    add={() => {
                        setValor(valor + 100);
                    }}
                    remove={() => setValor(valor <= 99 ? valor : valor - 100)}
                />
                <Cedula
                    valor={200}
                    add={() => {
                        setValor(valor + 200);
                    }}
                    remove={() => setValor(valor <= 199 ? valor : valor - 200)}
                />
            </div>
            <div className="container-botoes-sacar">
                <Botao texto="Voltar" onClick={() => navigate("/home")}></Botao>
                <Botao texto="Sacar"></Botao>
            </div>
        </div>
    );
}

