import { Mail } from "lucide-react";
import { User } from "lucide-react";
import Password from "@/components/Password";
import styles from "./styles.module.css";

export default function RegisterPage() {
    return (
        <div className="page">
            <h1>Cadastro</h1>
            <form>
                <div>
                    <label htmlFor="email">Username</label>
                    <div className={styles.inputContainer}>
                        <User className={styles.icon} />
                        <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Digite seu nome"
                        required />
                    </div>
                    <hr />
                </div>
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
                <h3 className={styles.haveAccount}>- Já possui uma conta?
                    <a href="/auth/login">Faça Login</a>
                </h3>
                <img
                src="/src/assets/character.svg"
                alt="character"
                className="character"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
} 