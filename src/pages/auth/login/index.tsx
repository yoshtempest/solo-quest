import Password from "@/components/Password";
import Email from "@/components/Email";
import ROUTES from "@/core/constants/routes";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";
import { useState } from "react";
import { login } from "@/services/auth";

export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        try {
            const { token } = await login(email, password);
            localStorage.setItem("token", token);
            navigate(ROUTES.home);
        } catch {
            alert("Email ou senha inválidos");
        }
    }
    return (
        <div className="page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Email value={email} onChange={setEmail} />
                <Password value={password} onChange={setPassword}/>
                <a className={styles.link} href="/forgot-password">- Esqueceu a senha?</a>
                <img
                src="/src/assets/character.svg"
                alt="character"
                className="character"
                />
                <button type="submit">Entrar</button>
                <div className="rowContainer">
                    <hr className={styles.lowHr} />
                    <h2 className={styles.spacingRow}>Ou</h2>
                    <hr className={styles.lowHr} />
                </div>
                <button
                type="button"
                onClick={() => navigate(ROUTES.auth.register)}>Cadastre-se</button>
            </form>
        </div>
    )
} 