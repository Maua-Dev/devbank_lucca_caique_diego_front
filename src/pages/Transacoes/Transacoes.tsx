import "./Transacoes.css"
import Botao from "../../components/Botao/Botao"
import Documentacao from "../../components/Documentacao/Documentacao"
import Topbar from "../../components/Topbar/Topbar"
import Transacao from "../../components/Transacao/Transacao"
import { useNavigate } from "react-router"
import { get } from "../../services/api"
import { useEffect, useState } from "react"

export default function Transacoes() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [transactions, setTransactions] = useState<any[]>([]);

    useEffect(() => {
        async function getHistory() {
            try {
                return await get("/history")
            } catch (error) {
                console.error(error)
            }
        }
        getHistory().then((data) => {
            if (data && Array.isArray(data.all_transactions)) {
                setTransactions([...data.all_transactions].reverse())
            } else {
                setTransactions([])
            }
        });
    }, []);



    const navigate = useNavigate();

    return (
        <div className="container-transacoes">
            <Topbar>
                <Documentacao fixo={false} />
            </Topbar>

            <div className="historico-container">
                <span>Histórico de Transações</span>
            </div>

            <div className="historico" id="historico">
                {transactions != null ? [...transactions].map((transaction: { id?: string; timestamp: number; current_balance: number; type: string; value: number }, index: number) => (
                    <Transacao
                        key={transaction.id || index.toString()}
                        data={transaction.timestamp}
                        id={transaction.id || index.toString()}
                        saldo={transaction.current_balance}
                        texto={transaction.type}
                        valor={transaction.value}
                    />
                )) : ""}
            </div>

            <div className="botao-componente">
                <Botao texto="Voltar" onClick={() => navigate("/home")} />
            </div>
        </div>
    )
}