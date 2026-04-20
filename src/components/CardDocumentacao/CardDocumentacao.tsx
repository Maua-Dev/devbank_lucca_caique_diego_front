import "./CardDocumentacao.css";

interface ICardDocumentacao {
    tipo: string;
    rota: string;
}

export default function CardDocumentacao({rota, tipo}:ICardDocumentacao) {
    return (
        <button className="card-documentacao">
            {tipo} {rota}
        </button>
    )
}