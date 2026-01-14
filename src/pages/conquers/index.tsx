import styles from './styles.module.css'
import IMAGES from "@/core/constants/images";
import { DIFFICULTY_ORDER } from '@/core/constants/difficulty'
import { useBossProgressionContext } from "@/contexts/BossProgression";


export default function ConquersPage() {
    const { isDifficultyCompleted } = useBossProgressionContext();
    const easyCompleted = isDifficultyCompleted("Fácil");
    return (
        <div className="page">
            <div>
                <div className={styles.rowContainer}>
                    <div className={`${styles.moreBig} ${easyCompleted ? styles.completed : ""}`}>
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
                        <div className={`${styles.item} ${easyCompleted ? styles.completed : ""}`}>
                            <h3>Derrote Leônidas, o Guerreiro no modo {DIFFICULTY_ORDER[0]}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}