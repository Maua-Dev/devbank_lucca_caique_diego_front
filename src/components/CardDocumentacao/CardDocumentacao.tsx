import "./CardDocumentacao.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Icon from '@mdi/react';
import { mdiClipboardOutline } from '@mdi/js';

interface ICardDocumentacao {
    id: string;
    tipo: string;
    rota: string;
    desc: string;
    response: string;
    request?: string;
}

function handleCardActivity(id: string) {
    const card = document.getElementById(id)
    card?.getElementsByClassName("card-documentacao")[0].classList.toggle("ligado");

    card?.getElementsByClassName("container-documentacao")[0].classList.toggle("hidden");
    card?.getElementsByClassName("desc")[0].classList.toggle("hidden");
    card?.getElementsByClassName("request")[0]?.classList.toggle("hidden");
    card?.getElementsByClassName("response")[0].classList.toggle("hidden");
}


function handleCardType(tipo: string, id: string) {
    const card = document.getElementById(id)
    if (tipo === "get") {
        card?.getElementsByClassName("request")[0]?.classList.toggle("hidden");
    }
}

function handleCopy(classe: string, id: string) {
    const card = document.getElementById(id)
    card?.getElementsByClassName(classe)[0].classList.toggle("hidden");
}

export default function CardDocumentacao({ rota, tipo, desc, response, request, id }: ICardDocumentacao) {
    return (
        <div id={id}>
            <button className="card-documentacao" onClick={() => {
                handleCardActivity(id)
                handleCardType(tipo, id)
            }}>
                {tipo} {rota}
            </button>

            <div className="container-documentacao hidden">
                <pre className="desc hidden">
                    {desc}
                </pre>
                <CopyToClipboard text={request ? request : "Nada para copiar"} >
                    <pre id="request" className="request hidden" onMouseEnter={() => handleCopy("icone-request", id)} onMouseLeave={() => handleCopy("icone-request", id)}>
                        <Icon className="icone-request hidden" path={mdiClipboardOutline} size={1} />
                        Request: <br /><br />
                        <code>
                            {request}
                        </code>
                    </pre>
                </CopyToClipboard>
                <CopyToClipboard text={response}>
                    <pre className="response hidden" onMouseEnter={() => handleCopy("icone-response", id)} onMouseLeave={() => handleCopy("icone-response", id)}>
                        <Icon className="icone-response hidden" path={mdiClipboardOutline} size={1} />
                        Response: <br /><br />
                        <code>
                            {response}
                        </code>
                    </pre>
                </CopyToClipboard>
            </div>
        </div >

    )
}
