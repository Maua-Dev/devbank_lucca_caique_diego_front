import "./InputAPI.css"
interface IInputAPI {
    value: string;
    onChange: (e) => void;
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