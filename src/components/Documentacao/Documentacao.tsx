import "./Documentacao.css"

interface IDocumentacao {
    fixo: boolean;
}

export default function Documentacao({ fixo }: IDocumentacao) {
    const style = fixo
        ? {
            position: "absolute" as const,
            right: "32px",
            top: "32px",
        }
        : undefined

    return (
        <button className="documentacao" id="documentacao" style={style}>
            ?
        </button>
    )
}