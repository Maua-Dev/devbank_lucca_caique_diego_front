import "./Transacao.css";

interface ITransacao {
    texto: string;
    valor: number;
    data: Date,
    saldo: number;
}

function formatarNum(numero: number): string {
    return String(numero).padStart(2, "0");
}

const meses = {
    "0": "Jan",
    "1": "Fev",
    "2": "Mar",
    "3": "Abr",
    "4": "Mai",
    "5": "Jun",
    "6": "Jul",
    "7": "Ago",
    "8": "Set",
    "9": "Out",
    "10": "Nov",
    "11": "Dez",
}

function handleCardColor(texto: string): string {
    let cor: string = "red";
    if (texto == "Deposito") {
        cor = "green"
    }
    return cor;
}

export default function Transacao({ texto, valor, data, saldo }: ITransacao) {

    const cor = handleCardColor(texto)

    console.log(data)
    const mes = meses[data.getMonth()]

    return (
        <div className="card">
            <div className="Acao" style={{ "background": cor }}>
                <p>{texto}</p>
            </div>
            <div className="Inferior">
                <div className="Valor">
                    <p>VALOR:</p>
                    <span>R$ {valor} </span>
                </div>
                <div className="Data">
                    <p>DATA:</p>
                    <span>{mes} {data.getDate()} {data.getFullYear()} {formatarNum(data.getHours())}:{formatarNum(data.getMinutes())}:{formatarNum(data.getSeconds())}</span>
                </div>
                <div className="Saldo">
                    <p>SALDO:</p>
                    <span>R$ {saldo} </span>
                </div>
            </div>
        </div>
    );
}
