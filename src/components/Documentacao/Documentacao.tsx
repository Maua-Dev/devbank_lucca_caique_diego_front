import "./Documentacao.css"

interface IDocumentacao {
    fixo: boolean;
}

export default function Documentacao({ fixo }: IDocumentacao) {
    if (fixo) {
        const doc = document.getElementById("documentacao")
        if (doc) {
            doc.style.position = "absolute"
            doc.style.right = "32px"
            doc.style.top = "32px"
        }

    }
    return (
        <button className="documentacao" id="documentacao">?</button>
    )
}