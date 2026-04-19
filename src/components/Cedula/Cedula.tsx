import { useState } from "react";
import "./Cedula.css";
interface ICedula {
    valor: number;
}

export default function Cedula({ valor }: ICedula) {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <div className="cardCedula">
                <p>R${valor}</p>
                <div className="containerMenor">
                    <p> Quantidade </p>
                    <div>
                        <button
                            onClick={() => setCount(count <= 0 ? 0 : count - 1)}
                        >
                            -
                        </button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
