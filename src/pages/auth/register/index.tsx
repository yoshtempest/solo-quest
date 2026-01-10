import { register } from "@/services/auth";
import { useNavigate } from "react-router";
import { User } from "lucide-react";
import Email from "@/components/Email";
import Password from "@/components/Password";
import styles from "./styles.module.css";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await register(email, username, password);
            navigate("/auth/login");
        } catch {
            alert("Erro ao cadastrar usuário");
        }
    }
    return (
        <div className="page">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Username</label>
                    <div className="inputContainer">
                        <User />
                        <input
                            className="formInput"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Digite seu nome"
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                    </div>
                    <hr />
                </div>
                <Email value={email} onChange={setEmail} />
                <Password value={password} onChange={setPassword} />
                <h3 className={styles.haveAccount}>
                    - Já possui uma conta?
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