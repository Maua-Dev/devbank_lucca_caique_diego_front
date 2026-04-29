import "./Transacoes.css"
import Botao from "../../components/Botao/Botao"
import Documentacao from "../../components/Documentacao/Documentacao"
import Topbar from "../../components/Topbar/Topbar"
import { Users } from "../../mock/User"
import Transacao from "../../components/Transacao/Transacao"
import { transactions } from "../../mock/Transactions"

export default function Transacoes() {
    return (
        <div className="container-transacoes">
            <Topbar user={Users.user1}>
                <Documentacao fixo={false} />
            </Topbar>

            <div className="historico-container">
                <span>Histórico de Transações</span>
            </div>

            <div className="historico" id="historico">
                {transactions.map((transaction) => (
                    <Transacao
                        key={transaction.id}
                        data={transaction.data}
                        id={transaction.id}
                        saldo={transaction.saldo}
                        texto={transaction.tipo}
                        valor={transaction.valor}
                    />
                ))}
            </div>

            <div className="botao-componente">
                <Botao texto="Voltar" />
            </div>
        </div>
    )
}