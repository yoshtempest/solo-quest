import { Lock } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";
import styles from "./styles.module.css";


interface Props {
    value: string;
    onChange: (value: string) => void;
}
export default function Password({ value, onChange }: Props) {
    const [hidePassword, setHidePassowrd] = useState<boolean>(true);
    return (
        <div>
            <label htmlFor="password">Senha</label>
            <div className="inputContainer">
                <Lock />
                <input
                className="formInput"
                type={hidePassword ? "password" : "text"}
                id="password"
                name="password"
                placeholder="Digite sua senha"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required />
                {hidePassword ? (
                    <Eye
                        className={styles.eyeicon}
                        onClick={() => setHidePassowrd(false)}
                    />
                    ) : (
                    <EyeOff
                        className={styles.eyeicon}
                        onClick={() => setHidePassowrd(true)}
                    />
                )}
            </div>
            <hr />
        </div>
    );
}
