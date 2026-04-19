import "./Botao.css"

interface IBotao{
    texto:string;
    onClick?():()=> void;
}

export default function Botao({texto, onClick}:IBotao){
    return (
        <button className="botao" onClick={onClick}>
            {texto}
        </button>
    )
}