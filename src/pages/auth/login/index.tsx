import { Mail } from "lucide-react";
import Password from "@/components/Password";
import styles from "./styles.module.css";

export default function LoginPage() {
    return (
        <div className="page">
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <div className={styles.inputContainer}>
                        <Mail className={styles.icon} />
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        required />
                    </div>
                    <hr />
                </div>
                <Password />
                <a className={styles.link} href="/forgot-password">- Esqueceu a senha?</a>
                <img
                src="/src/assets/character.svg"
                alt="character"
                className={styles.character}
                />
                <button type="submit">Entrar</button>
                <div className="rowContainer">
                    <hr className={styles.lowHr} />
                    <h2 className={styles.spacingRow}>Ou</h2>
                    <hr className={styles.lowHr} />
                </div>
                <button
                type="button"
                onClick={() => window.location.href = '/auth/register'}>Cadastre-se</button>
            </form>
        </div>
    )
} 