import "./Transacao.css";

interface ITransacao {
    texto: string;
    valor: number;
    saldo: number;
}

export default function Transacao({ texto, valor, saldo }: ITransacao) {
    return (
        <div className="card">
            <div className="Acao">
                <p>{texto}</p>
            </div>
            <div className="Inferior">
                <div className="Valor">
                    <p>VALOR:</p>
                    <span>R$ {valor} </span>
                </div>
                <div className="Data">
                    <p>DATA:</p>
                    <span>Apr 22 2026 16:00:00 </span>
                </div>
                <div className="Saldo">
                    <p>SALDO:</p>
                    <span>R$ {saldo} </span>
                </div>
            </div>
        </div>
    );
}
