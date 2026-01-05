import styles from './styles.module.css'
import IMAGES from "@/core/constants/images";
import { DIFFICULTY_ORDER } from '@/components/DifficultySelector/index'

export default function ConquersPage() {
    return (
        <div className="page">
            <div>
                <div className={styles.rowContainer}>
                    <div className={styles.moreBig}>
                        <img
                        src={IMAGES.bossBadge}
                        alt="Chefão"
                        className={styles.icon}
                        />
                    </div>
                    <div className={styles.columnContainer}>
                        <div className={styles.difficulties}>
                            {DIFFICULTY_ORDER.map((difficulty) => (
                                <h4 key={difficulty}>{difficulty}</h4>
                            ))}
                        </div>
                        <div className={styles.item}>
                            <h3>Derrote Leônidas, o Guerreiro no modo {DIFFICULTY_ORDER[0]}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}