import "./CardDocumentacao.css";

interface ICardDocumentacao {
    tipo: string;
    rota: string;
    desc: string;
    response: string;
    request?: string;
}

function handleCardType(tipo: string) {
    if (tipo == "get") {
        document.getElementsByClassName("request")[0].classList.add("hidden");
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CardDocumentacao({ rota, tipo, desc, response, request }: ICardDocumentacao) {
    handleCardType(tipo)
    return (
        <div>
            <button className="card-documentacao">
                {tipo} {rota}
            </button>
            <div className={tipo}>
                <pre className="desc">
                    {desc}
                </pre>
                <pre className="request">
                    <code>
                        {request}
                    </code>
                </pre>
                <pre className="response">
                    <code>
                        {response}
                    </code>
                </pre>
            </div>
        </div>

    )
}