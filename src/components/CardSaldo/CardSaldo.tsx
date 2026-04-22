import "./CardSaldo.css";

interface ICardSaldo {
    texto: string;
    boxSide: string;
}

// function handleBoxSide(boxSide:string){
//    let lado = document.getElementById('a');
//    lado.style.float=boxSide;
// }


export default function CardSaldo({ texto, boxSide}: ICardSaldo) {
    // handleBoxSide (boxSide)
    return (
        <div className="card-superior">
            <div className="texto">
                <p>{texto}</p>
            </div>
            <div className="saldo" id="a" >
                <p>{texto}</p>
            </div>
        </div>
    );
}
