import styles from './styles.module.css'
import { ChevronDown } from 'lucide-react'

export default function BossPage() {
    return (
        <div className="page">
            <div>
                <div className="columnContainer">
                    <h2 className={styles.textCenter}>Leonidas, o Guerreiro</h2>
                    <img
                        src="/src/assets/leonidas.svg"
                        alt="Leonidas"
                        className={styles.boss}
                    />
                </div>
                <h3 className={styles.textCenter}>Nível recomendado: 20</h3>
                <button>Alterar Dificuldade<ChevronDown/></button>
            </div>
        </div>
    )
} 