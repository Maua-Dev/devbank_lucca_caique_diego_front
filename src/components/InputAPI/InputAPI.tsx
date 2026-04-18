import "./InputAPI.css"
import type { ChangeEventHandler } from "react"

interface IInputAPI {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function InputAPI({ value, onChange }: IInputAPI) {
    return (
        <input
        type="text"
        name="inputAPI"
        id="inputAPI"
        placeholder="Coloque aqui o endpoint da sua API"
        className="inputAPI"
        value={value}
        onChange={onChange}
        />
    )
}