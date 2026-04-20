import "./CardDocumentacao.css";

interface ICardDocumentacao {
    tipo: string;
    rota: string;
    desc: string;
    response: string;
    request?: string;
}

function handleCardActivity() {
    document.getElementsByClassName("card-documentacao")[0].classList.toggle("ligado");

    document.getElementsByClassName("container-documentacao")[0].classList.toggle("hidden");
    document.getElementsByClassName("desc")[0].classList.toggle("hidden");
    document.getElementsByClassName("request")[0]?.classList.toggle("hidden");
    document.getElementsByClassName("response")[0].classList.toggle("hidden");
}


function handleCardType(tipo: string) {
    if (tipo == "get") {
        const request = document.getElementById("request")
        if (request?.parentNode) {
            request.parentNode.removeChild(request)
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CardDocumentacao({ rota, tipo, desc, response, request }: ICardDocumentacao) {

    handleCardType(tipo)
    return (
        <div>
            <button className="card-documentacao" onClick={() => {
                handleCardActivity()
                handleCardType(tipo)
            }}>
                {tipo} {rota}
            </button>
            <div className="container-documentacao hidden">
                <pre className="desc hidden">
                    {desc}
                </pre>
                <pre id="request" className="request hidden">
                    Request: <br /><br />
                    <code>
                        {request}
                    </code>
                </pre>
                <pre className="response hidden">
                    Response: <br /><br />
                    <code>
                        {response}
                    </code>
                </pre>
            </div>
        </div>

    )
}
