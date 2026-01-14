import styles from './styles.module.css'
import IMAGES from "@/core/constants/images";
import { DIFFICULTY_ORDER } from '@/core/constants/difficulty'
import { useBossProgressionContext } from "@/contexts/BossProgression";


export default function ConquersPage() {
    const { isDifficultyCompleted } = useBossProgressionContext();
    const anyCompleted = DIFFICULTY_ORDER.some(difficulty =>
        isDifficultyCompleted(difficulty)
    );

    return (
        <div className="page">
            <div>
                <div className={styles.rowContainer}>
                    <div className={`${styles.moreBig} ${anyCompleted ? styles.completed : ""}`}>
                        <img
                        src={IMAGES.bossBadge}
                        alt="Chefão"
                        className={styles.icon}
                        />
                    </div>
                    <div className={styles.columnContainer}>
                        <div className={styles.difficulties}>
                            {DIFFICULTY_ORDER.map((difficulty) => {
                                const completed = isDifficultyCompleted(difficulty);

                                return (
                                    <h4
                                        key={difficulty}
                                        className={`${styles.text} ${completed ? styles.completed : ""}`}
                                    >
                                        {difficulty}
                                    </h4>
                                );
                            })}
                        </div>
                        <div className={`${styles.item} ${anyCompleted ? styles.completed : ""}`}>
                            <h3>Derrote Leônidas, o Guerreiro no modo {DIFFICULTY_ORDER[0]}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}