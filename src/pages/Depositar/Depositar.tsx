import Topbar from "../../components/Topbar/Topbar";
import CardSaldo from "../../components/CardSaldo/CardSaldo";
import Documentacao from "../../components/Documentacao/Documentacao";
import { useNavigate } from "react-router";
import { useState } from "react";
import Cedula from "../../components/Cedula/Cedula";
import Botao from "../../components/Botao/Botao";
import "./Depositar.css";
import { post } from "../../services/api";

export default function Depositar() {

    const navigate = useNavigate();
    const [valor, setValor] = useState(0);
    const [notas, setNotas] = useState<Record<string, number>>({
        "2": 0, "5": 0, "10": 0, "20": 0, "50": 0, "100": 0, "200": 0
    });

    const saldo: number = Number(localStorage.getItem("saldo"))

    const countNota = (valorNota: number, soma: boolean) => {
        if (soma) {
            setNotas(prev => ({ ...prev, [valorNota.toString()]: prev[valorNota.toString()] + 1 }));
            setValor(v => v + valorNota);
        } else {
            if (notas[valorNota.toString()] > 0) {
                setNotas(prev => ({ ...prev, [valorNota.toString()]: prev[valorNota.toString()] - 1 }));
                setValor(v => v - valorNota);
            }
        }
    };

    async function postDeposit() {
        if (valor === 0) return;
        try {
            const resp = await post("/deposit", notas);
            if (resp && resp.current_balance !== undefined) {
                localStorage.setItem("saldo", resp.current_balance.toString());
            }
            navigate("/home");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="containerDepositar">
            <Topbar>
                <Documentacao fixo={false} />
            </Topbar>
            <div className="containerSaldo">
                <CardSaldo
                    boxSide="left"
                    texto={`Quantidade depositada: R$ ${valor}`}
                    saldo={saldo}
                ></CardSaldo>
            </div>
            <div className="container-cedulas">
                <div className="p-cedulas">
                    <p>Selecione as cédulas e a quantidade que você deseja.</p>
                </div>
                <Cedula
                    valor={2}
                    add={() => countNota(2, true)}
                    remove={() => countNota(2, false)}
                />
                <Cedula
                    valor={5}
                    add={() => countNota(5, true)}
                    remove={() => countNota(5, false)}
                />
                <Cedula
                    valor={10}
                    add={() => countNota(10, true)}
                    remove={() => countNota(10, false)}
                />
                <Cedula
                    valor={20}
                    add={() => countNota(20, true)}
                    remove={() => countNota(20, false)}
                />
                <Cedula
                    valor={50}
                    add={() => countNota(50, true)}
                    remove={() => countNota(50, false)}
                />
                <Cedula
                    valor={100}
                    add={() => countNota(100, true)}
                    remove={() => countNota(100, false)}
                />
                <Cedula
                    valor={200}
                    add={() => countNota(200, true)}
                    remove={() => countNota(200, false)}
                />
            </div>
            <div className="container-botoes-depositar">
                <Botao texto="Voltar" onClick={() => navigate("/home")}></Botao>
                <Botao texto="Depositar" onClick={() => postDeposit()} />
            </div>
        </div >
    );
}

