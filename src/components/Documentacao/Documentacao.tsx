import "./Documentacao.css"
import { useEffect } from "react"

interface IDocumentacao {
    fixo: boolean;
}

export default function Documentacao({ fixo }: IDocumentacao) {
    useEffect(() => {
        const doc = document.getElementById("documentacao")
        if (doc && fixo) {value=''
            doc.style.position = "absolute"
            doc.style.right = "32px"
            doc.style.top = "32px"
        }
    }, [fixo])

    return (
        <button
            className="documentacao"
            id="documentacao"
            style={fixo ? { position: "absolute", right: "32px", top: "32px" } : {}}
        >
            ?
        </button>
    )
}