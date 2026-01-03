import styles from './styles.module.css'
import { ChevronRight } from 'lucide-react'

export default function BossPage() {
    return (
        <div className={styles.bossPage}>
            <div>
                <div className="columnContainer">
                    <h3 className={styles.textCenter}>Leônidas, o Guerreiro - Nv 10</h3>
                    <img
                        src="/src/assets/leonidas.svg"
                        alt="Leonidas"
                        className={styles.boss}
                    />
                </div>
                <h3 className={styles.textCenter}>Nível recomendado: 10</h3>
                <button>Dificuldade: Fácil<ChevronRight/></button>
            </div>
        </div>
    )
} 