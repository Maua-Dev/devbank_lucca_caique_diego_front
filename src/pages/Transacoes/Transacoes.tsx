import "./Transacoes.css"
import Botao from "../../components/Botao/Botao"
import Documentacao from "../../components/Documentacao/Documentacao"
import Topbar from "../../components/Topbar/Topbar"
import { Users } from "../../mock/User"
import Transacao from "../../components/Transacao/Transacao"
import { useNavigate } from "react-router"
import { useState } from "react"

export default function Transacoes() {
    const navigate = useNavigate();
    const getHistoricoDoStorage = () => {
        try {
            const data = localStorage.getItem("historico");
            return data ? JSON.parse(data) : [];
        } catch (e) {
            localStorage.removeItem("historico");
            return [];
        }
    };
    const [historico] = useState(getHistoricoDoStorage())

    return (
        <div className="container-transacoes">
            <Topbar user={Users.user1}>
                <Documentacao fixo={false} />
            </Topbar>

            <div className="historico-container">
                <span>Histórico de Transações</span>
            </div>

            <div className="historico" id="historico">
                {historico != null ? historico.map((transaction: { id: string; data: number; saldo: number; tipo: string; valor: number }) => (
                    <Transacao
                        key={transaction.id}
                        data={transaction.data}
                        id={transaction.id}
                        saldo={transaction.saldo}
                        texto={transaction.tipo}
                        valor={transaction.valor}
                    />
                )) : ""}
            </div>

            <div className="botao-componente">
                <Botao texto="Voltar" onClick={() => navigate("/home")} />
            </div>
        </div>
    )
}