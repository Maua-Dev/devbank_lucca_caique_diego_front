import { useState } from "react";
import "./Cedula.css";


interface ICedula {
    valor: number;
    add: ()=> void;
    remove: ()=> void;
}

export default function Cedula({ valor, add, remove }: ICedula) {
    const [count, setCount] = useState(0);
    
    return (
        <div className="container-cedula">
            <div className="cardCedula">
                <span className="spanrs">R$</span>
                <span>{valor}</span>
            </div>
            <div className="containerMenor">
                <p>Quantidade</p>
                <div>
                    <button onClick={() =>{setCount(count <= 0 ? 0 : count - 1); count != 0 ? remove() : 0}}>-</button>
                    <span>{count}</span>
                    <button onClick={() => {setCount(count + 1); add()}}>+</button>
                </div>
            </div>
        </div>
    );
}