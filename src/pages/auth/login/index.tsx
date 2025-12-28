import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
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
                <div>
                    <label htmlFor="password">Senha</label>
                    <div className={styles.inputContainer}>
                        <Lock className={styles.icon} />
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        required />
                    </div>
                    <hr />
                    <a href="/forgot-password">Esqueceu a senha?</a>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
} 