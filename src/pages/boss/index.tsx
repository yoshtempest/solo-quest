import styles from './styles.module.css'
import { ChevronRight } from 'lucide-react'

export default function BossPage() {
    return (
        <div className="page">
            <div>
                <div className="columnContainer">
                    <h2 className={styles.textCenter}>Leônidas, o Guerreiro</h2>
                    <div className={styles.hpBar}>Nv 20</div>
                    <img
                        src="/src/assets/leonidas.svg"
                        alt="Leonidas"
                        className={styles.boss}
                    />
                </div>
                <h3 className={styles.textCenter}>Nível recomendado: 20</h3>
                <h3 className={styles.textCenter}>Recompensa: 500XP</h3>
                <button>Alterar Dificuldade<ChevronRight/></button>
            </div>
        </div>
    )
} 