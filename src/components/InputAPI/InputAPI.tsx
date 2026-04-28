import "./InputAPI.css"
import { ChangeEvent, PropsWithChildren, ReactNode } from "react"

interface IInputAPI {
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    children?: PropsWithChildren<ReactNode>;
}

export default function InputAPI({ value, onChange, children }: IInputAPI) {
    return (
        <div className="container-input-api">
            <input
                type="text"
                name="inputAPI"
                id="inputAPI"
                placeholder="Coloque aqui o endpoint da sua API"
                className="inputAPI"
                value={value}
                onChange={onChange}
            />
            {children}
        </div>
    )
}