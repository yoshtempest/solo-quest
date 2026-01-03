import styles from './styles.module.css'
import { ChevronRight } from 'lucide-react'
import IMAGES from '@/core/constants/images'

export default function BossPage() {
    return (
        <div className={styles.bossPage}>
            <div>
                <div className="columnContainer">
                    <h3 className={styles.textCenter}>Leônidas, o Guerreiro - Nv 10</h3>
                    <img
                        src="/src/assets/bosshp.svg"
                        alt="Leonidas"
                        className={styles.boss}
                    />
                    <img
                        src="/src/assets/leonidas.svg"
                        alt="Leonidas"
                        className={styles.boss}
                    />
                </div>
                <h3 className={styles.textCenter}>Nível recomendado: 10</h3>
                <button>Dificuldade: Fácil<ChevronRight/></button>
                <div
                    className={`columnContainer ${styles.justifyStart}`}
                >
                    <div className={`rowContainer ${styles.spacement}`}>
                        <div className="rowContainer">
                            <img src={IMAGES.pushUp} />
                            <h3>Flexão</h3>
                        </div>
                        <div className="rowContainer">
                            <h3>0/50reps</h3>
                            <input
                                type="checkbox"
                                className={styles.checkBox}
                            />
                        </div>
                    </div>

                        <h4>1 - Flexão tradicional</h4>
                        <h4>2 - Flexão com pegada aberta</h4>
                        <h4>Flexão tradicional</h4>
                    <hr />
                </div>
            </div>
        </div>
    )
} 