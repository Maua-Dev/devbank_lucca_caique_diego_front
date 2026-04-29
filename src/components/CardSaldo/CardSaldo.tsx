import "./CardSaldo.css";

interface ICardSaldo {
    texto: string;
    saldo: number;
    boxSide: 'left' | 'right' | 'none';
}

export default function CardSaldo({ texto, boxSide, saldo }: ICardSaldo) {
    const isLeft = boxSide === 'left';

    return (
        <div className="card-superior">
            {isLeft && (
                <div className="saldo">
                    <p>{texto}</p>
                </div>
            )}

            <div className="texto">
                <p>{texto}</p>
            </div>

            {!isLeft && (
                <div className="saldoTransacao">
                    <p>Saldo: R${saldo}</p>
                </div>
            )}
        </div >
    );
}
