import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";
import styles from "./styles.module.css";

export default function LoginPage() {
    const [hidePassword, setHidePassowrd] = useState<boolean>(true);
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
                        type={hidePassword ? "password" : "text"}
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
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