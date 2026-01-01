import styles from './styles.module.css'
import { CircleFadingArrowUp, ChevronRight } from 'lucide-react'

export default function HomePage() {
    return (
        <div className="page">
            <div className="rowContainer">
                <div className="columnContainer">
                    <h2>Chikage</h2>
                    <img
                        src="/src/assets/character.svg"
                        alt="character"
                        className={styles.character}
                    />
                </div>
                <div className={styles.characterInfos}>
                    <h3>Nível: 01</h3>
                    <h4>Ranque: Frango</h4>
                    <h4>Ofensiva: 0 dias</h4>
                    <h4>10 de XP para o próximo nível</h4>
                    <div className="rowContainer">
                        <h3>EXP</h3>
                        <div className={styles.xpBar}>
                            <CircleFadingArrowUp className={styles.icon}/>
                        </div>
                    </div>
                </div>
            </div>
            <button>Missões Diárias<ChevronRight/></button>
            <button>Missões Semanais<ChevronRight/></button>
        </div>
    )
} 