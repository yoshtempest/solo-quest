import { Mail } from "lucide-react";


interface Props {
    value: string;
    onChange: (value: string) => void;
}
export default function Email({ value, onChange }: Props) {
    return (
        <div>
            <label htmlFor="email">E-mail</label>
            <div className="inputContainer">
                <Mail />
                <input
                className="formInput"
                type="email"
                id="email"
                name="email"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Digite seu email"
                required />
            </div>
            <hr />
        </div>
    );
}