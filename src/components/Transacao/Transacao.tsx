import "./Transacao.css";

interface ITransacao {
    texto: string;
    valor: number;
    data: number;
    saldo: number;
    id: string;
}

function handleCardColor(texto: string): string {
    return texto === "Deposito" ? "green" : "red";
}

export default function Transacao({ texto, valor, data, saldo, id }: ITransacao) {
    const dataNova = new Date(data);
    const cor = handleCardColor(texto);

    return (
        <div className="card" id={id}>
            <div className="acao" style={{ background: cor }}>
                <p>{texto}</p>
            </div>
            <div className="inferior">
                <div className="valor">
                    <p>VALOR:</p>
                    <span>R$ {valor}</span>
                </div>
                <div className="data">
                    <p>DATA:</p>
                    <span>{dataNova.toLocaleString()}</span>
                </div>
                <div className="saldo">
                    <p>SALDO:</p>
                    <span>R$ {saldo}</span>
                </div>
            </div>
        </div>
    );
}
