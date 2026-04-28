import "./Transacoes.css"
import Botao from "../../components/Botao/Botao"
import Documentacao from "../../components/Documentacao/Documentacao"
import Topbar from "../../components/Topbar/Topbar"
import { Users } from "../../mock/User"
import Transacao from "../../components/Transacao/Transacao"


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
                <Transacao data={new Date()} saldo={10} texto="Saque" valor={1000}/>
                <Transacao data={new Date()} saldo={10} texto="Saque" valor={1000}/>
            </div>
            <div className="botao-componente">
                <Botao texto="Voltar"/>
            </div>
        </div>

    )
}